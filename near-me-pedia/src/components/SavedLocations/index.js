import React from 'react';
import { View, Button, Platform } from 'react-native';

import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

import { AddLocation } from './AddLocation'
import { DisplaySavedLocations } from './locationsList/DisplaySavedLocations'

const LocationsScreen = (props) => {

  // _getLocationAsync = async () => {
  //   let { status } = await Permissions.askAsync(Permissions.LOCATION);
  //   if (status !== 'granted') {
  //     console.log('Permission to access location was denied')
  //   }
  //   let location = await Location.getCurrentPositionAsync({});
  //   const coords = {
  //     latitude: location.coords.latitude,
  //     longitude: location.coords.longitude
  //   }
  //   props.navigation.navigate('Nearby', {coordinates: coords})
  // }

  // const assignCurrentLocationAndNavigate = () => {
  //   if (Platform.OS === 'android' && !Constants.isDevice) {
  //     console.log('Oops, this will not work on Sketch in an Android emulator. Try it on your device!')
  //   } else {
  //    _getLocationAsync()
  //   }
  // }

  return (
    <View style={{ flex:1 }}>
      <AddLocation />
      {/* <Button title='Current Location' color="red" onPress={()=>assignCurrentLocationAndNavigate()} /> */}
      <DisplaySavedLocations navigate={props.navigation} />
    </View>
  )
}

export default LocationsScreen