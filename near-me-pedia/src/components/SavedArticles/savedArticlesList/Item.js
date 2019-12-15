import React from 'react';
import { Text, View, StyleSheet, Linking, Button } from 'react-native';

import { useSelector, useDispatch } from 'react-redux'

import { assignArticles } from './../../../state_manager/actions'

import getDistance from 'geolib/es/getDistance'


export const Item = ({ currentCoordinates, article, articleLat, articleLong, title }) => {

    const savedArticles = useSelector(state => state.savedArticles)
    const dispatch = useDispatch();
    const deleteArticle = () => {
        const newArticlesList = savedArticles.filter((item) => (item.pageid !== article.pageid))
        dispatch(assignArticles(newArticlesList))
    }

    const transformedToLink = title.split(' ').join('_');
    const distMeters = getDistance(currentCoordinates, { latitude: articleLat, longitude: articleLong})
    const distKilometers = distMeters/1000
    
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