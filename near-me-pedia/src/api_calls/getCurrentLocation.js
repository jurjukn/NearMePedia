import React,{ useState, useEffect } from 'react';
import { Text, View, StyleSheet, Linking, Platform, Button, Alert } from 'react-native';

import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';


export const getCurrentLocation = () => {

    const [currentLocation, setCurrentLocation] = useState({})
    const [retrieved, setRetrieved] = useState(false)

    _getMyLocationAsync = async () => {
        console.log(currentLocation)
        
            let { status } = await Permissions.askAsync(Permissions.LOCATION);
            if (status !== 'granted') {
            console.log('Permission to access location was denied')
            }
            let location = await Location.getCurrentPositionAsync({});
            const coords = {
            latitude: location.coords.latitude,
            longitude: location.coords.longitude
            }
            console.log(coords)
            setCurrentLocation(coords)
            setRetrieved(true)
        
    }

    
    if (Platform.OS === 'android' && !Constants.isDevice) {
        Alert("Could not get phone coordinates")
    } else {
        _getMyLocationAsync()
        // console.log(currentLocation)
    }
}