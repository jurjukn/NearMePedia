import React, { useState, useEffect } from 'react';
import { View, Button, Platform, Text } from 'react-native';

import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

import { AddLocation } from './AddLocation'
import { DisplaySavedLocations } from './locationsList/DisplaySavedLocations'

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
    console.log("Hello from locations ")
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied')
    }
    let location = await Location.getCurrentPositionAsync({})
    console.log(location)
    setCurrentCoordinates({latitude: location.coords.latitude, longitude: location.coords.longitude})
  }

  let text = "Waiting for current coordinates"
  if(errorMsg) {
      text = errorMsg
  }
  else if (currentCoordinates){
      text = JSON.stringify(currentCoordinates)
  } 
  return (
    <View style={{ flex:1 }}>
      <AddLocation />
      <Text>{text}</Text>
      {(currentCoordinates) &&
        <Button title='Current Location' color="red" onPress={()=>props.navigation.navigate('Nearby', {coordinates: currentCoordinates})} />
      }
      <DisplaySavedLocations navigate={props.navigation} />
    </View>
  )
}

export default LocationsScreen