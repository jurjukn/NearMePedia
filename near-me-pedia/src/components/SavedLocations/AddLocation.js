import React, { useState } from 'react';
import { View, Button, TextInput, Platform } from 'react-native';

import Constants from 'expo-constants'
import * as Location from 'expo-location'
import * as Permissions from 'expo-permissions'

import { useDispatch, useSelector } from 'react-redux'

import { addLocation } from './../../state_manager/actions'

export const AddLocation = () => {

    const dispatch = useDispatch()
    const [value, setValue] = useState('')
    const savedLocations = useSelector(state => state.savedLocations)

    _getAddressCoordinatessync = async (address) => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
            console.log('Permission to access location was denied')
            return
        }
        const json = await Location.geocodeAsync(address)
        if (json.length === 0){
          alert("Could not find address " + address )
          return
        }
        const latitude = (json[0].latitude).toString()
        const longitude = (json[0].longitude).toString()   
        const coords = {latitude: latitude, longitude: longitude}
        const location = {address: address, coordinates: coords}

        const list = savedLocations.filter((item) => 
        (location.coordinates.latitude === item.coordinates.latitude 
          && location.coordinates.latitude === item.coordinates.latitude)
        )
        if(list.length !== 0){
          alert("Location " + location.address + " already in list")
        }
        else{
          dispatch(addLocation(location))
          setValue("")
        }
    }

    addTodo = () => {
      if (value.length > 0) {
        if (Platform.OS === 'android' && !Constants.isDevice) {
          console.log('Oops, this will not work on Sketch in an Android emulator. Try it on your device!')
        } else {
          _getAddressCoordinatessync(value)
        }   
      }
	  }

    return(
        <View>
            <TextInput 
            placeholder="Add address you would like"
            placeholderTextColor="#abbabb"
            value={value}
            onChangeText={value => setValue(value)}
          />          
          <Button 
            title="Add"
            onPress={() => addTodo()}
          />
        </View>
    )
}

