import React,{ useState } from 'react';
import { Text, View, StyleSheet, Linking, Platform, Button } from 'react-native';

import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

import { useSelector, useDispatch } from 'react-redux'

import { assignArticles } from './../../../state_manager/actions'

import getDistance from 'geolib/es/getDistance'


export const Item = ({ article, articleLat, articleLong, title }) => {

    const [currentCoordinates, setCurrentCoordinates] = useState({})
    const savedArticles = useSelector(state => state.savedArticles)
    const dispatch = useDispatch();

    _getMyLocationAsync = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
          console.log('Permission to access location was denied')
        }
        let location = await Location.getCurrentPositionAsync({});
        const coords = {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude
        }
        setCurrentCoordinates(coords)
    }
    
    const assignCurrentLocationAndNavigate = () => {
        if (Platform.OS === 'android' && !Constants.isDevice) {
            console.log('Oops, this will not work on Sketch in an Android emulator. Try it on your device!')
        } else {
            _getMyLocationAsync()
        }
    }

    const deleteArticle = () => {
        const newArticlesList = savedArticles.filter((item) => (item.pageid !== article.pageid))
        dispatch(assignArticles(newArticlesList))
    }

    const transformedToLink = title.split(' ').join('_');
    const distMeters = getDistance(currentCoordinates, { latitude: articleLat, longitude: articleLong})
    const distKilometers = distMeters/1000
    
    assignCurrentLocationAndNavigate()
    return (
        <View style={styles.item}>
            <View onStartShouldSetResponder={() => Linking.openURL('https://en.wikipedia.org/wiki/'+transformedToLink)}>
                <Text style={styles.title}>{title} </Text>
            </View>
            <Text>Distance: {distKilometers} km</Text>
            <Button title="Delete" onPress={()=>deleteArticle()} />
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 16,
    },
})