import React, { useState } from 'react';
import { View, TextInput, Platform } from 'react-native';
import { Icon } from 'react-native-elements'

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
            alert('Permission to access location was denied')
            return
        }
        try {
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
        } catch (error) {
          alert(error);
        }
        
      
    }

    addTodo = () => {
      if (value.length > 0) {
        if (Platform.OS === 'android' && !Constants.isDevice) {
          alert('Oops, this will not work on Sketch in an Android emulator. Try it on your device!')
        } else {
          _getAddressCoordinatessync(value)
        }   
      }
	  }

    return(
        <View style={{paddingTop:10, padding:10, flexDirection:"row"}}>
          <View style={{flex:5, marginLeft: 5}}>
            <TextInput 
              style={{backgroundColor:"#F0F8FF"}}
              placeholder="Enter address"
              placeholderTextColor="#abbabb"
              value={value}
              onChangeText={value => setValue(value)}
            />    
          </View>
          <View style={{flex: 1, backgroundColor:"#F0F8FF", marginRight: 5}} onStartShouldSetResponder={() => addTodo()}>    
            <Icon name='done' color='blue' /> 
          </View>
        </View>
    )
}

