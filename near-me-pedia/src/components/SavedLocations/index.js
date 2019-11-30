import React from 'react';
import { View } from 'react-native';

import { AddLocation } from './AddLocation'
import { DisplaySavedLocations } from './DisplaySavedLocations'


const LocationsScreen = (props) => {

  return (
    <View style={{ flex:1 }}>
      <AddLocation />
      <DisplaySavedLocations navigate = {props.navigation} />
    </View>
  )
}

export default LocationsScreen