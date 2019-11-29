import React from 'react';
import { View } from 'react-native';

import { AddLocation } from './AddLocation'

const LocationsScreen = () => {

      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <AddLocation />
        </View>
      )
  }

export default LocationsScreen