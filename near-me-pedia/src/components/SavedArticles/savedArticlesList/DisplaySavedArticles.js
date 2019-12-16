import React, { useEffect, useState } from 'react';
import { FlatList, View, Platform, Text } from 'react-native';

import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

import { useSelector } from 'react-redux'
import { Item } from './Item'


export const DisplaySavedArticles = () => {

    const savedArticles = useSelector(state => state.savedArticles)

    const [currentCoordinates, setCurrentCoordinates] = useState(null)
    const [errorMsg, setErrorMsg] = useState(null)

    useEffect(()=>{
        if (Platform.OS === 'android' && !Constants.isDevice) {
            setErrorMsg('Oops, this will not work on Sketch in an Android emulator. Try it on your device!')
        } else {
            _getLocationAsync()
        }
     }, [])
    
    _getLocationAsync = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied')
        }
        try{
            let location = await Location.getCurrentPositionAsync({})
            setCurrentCoordinates({latitude: location.coords.latitude, longitude: location.coords.longitude})
        } catch (error) {
            alert(error);
        }
    }

    let text = "Waiting.."
    if(errorMsg) {
        text = errorMsg
    }
    else if (currentCoordinates){
        text = JSON.stringify(currentCoordinates)
        var coords = text
    } 
    return(
        <View>
            <View>
                <Text>{text}</Text>
            </View>
            {(currentCoordinates) &&
                <FlatList
                    data={savedArticles}
                    renderItem={({ item }) => <Item currentCoordinates={currentCoordinates} article={item} articleLat={item.lat} articleLong={item.lon} title={item.title} key={item.title} />}
                    keyExtractor={item => item.title}
                />
            } 
        </View>
    )
}
