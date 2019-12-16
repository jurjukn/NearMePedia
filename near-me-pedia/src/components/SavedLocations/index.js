import React, { useState, useEffect } from 'react';
import { View, Button, Platform, Text } from 'react-native';

import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

import { AddLocation } from './AddLocation'
import { DisplaySavedLocations } from './locationsList/DisplaySavedLocations'
import { CurrentCoordinates } from './../CurrentCoordinates'

const LocationsScreen = (props) => {

  const [currentCoordinates, setCurrentCoordinates] = useState(null)
  const [errorMsg, setErrorMsg] = useState(null)

  useEffect(()=>{
      if (Platform.OS === 'android' && !Constants.isDevice) {
          setErrorMsg('Oops, this will not work on Sketch in an Android emulator. Try it on your device!')
      } else {
          _getLocationAAsync()
      }
  }, [])

  _getLocationAAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied')
    }
    let location = await Location.getCurrentPositionAsync({})
    setCurrentCoordinates({latitude: location.coords.latitude, longitude: location.coords.longitude})
  }

  let text = "Waiting for current coordinates"
  if(errorMsg) {
      text = errorMsg
  }
  else if (currentCoordinates){
      text = ""
  } 
  return (
    <View style={{ flex:1, backgroundColor:"#E6E6FA" }}>
      {(currentCoordinates) ? (
          <View onStartShouldSetResponder={() => props.navigation.navigate('Nearby', {coordinates: currentCoordinates})}>
            <CurrentCoordinates coordinates={currentCoordinates} />
          </View>
        ) : (
          <Text style={{ textAlign:"center", color:"blue" }}>{text}</Text>
        )
      }
      <AddLocation />
      <DisplaySavedLocations navigate={props.navigation} />
    </View>
  )
}

export default LocationsScreen