import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import { useSelector, useDispatch } from 'react-redux'

import { assignLocations } from './../../../state_manager/actions'

export const Item = ({ latitude, longitude, coordinates, address, navigate, location }) => {

    const savedLocations = useSelector(state => state.savedLocations)
    const dispatch = useDispatch();

    const assignCoordsAndNavigate = (coordinates, navigate) =>{
        navigate.navigate('Nearby',{coordinates: coordinates})
    }
    
    const deleteLocation = (location) => {
        const newLocationsList = savedLocations.filter(
            (item) => (
                item.coordinates.latitude !== location.coordinates.latitude
                && item.coordinates.longitude !== location.coordinates.longitude
            )
        )
        dispatch(assignLocations(newLocationsList))
    }

    return (
        <View style={styles.item}>
            <View onStartShouldSetResponder={()=>assignCoordsAndNavigate(coordinates, navigate)}>
                <Text style={styles.title}> {address} </Text>
            </View>
            <Text>{latitude} : {longitude}</Text>
            <Button title="delete" onPress={()=>deleteLocation(location)} />
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