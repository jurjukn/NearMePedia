import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { useDispatch } from 'react-redux'
import { assignStartCoordinates } from '../../../state_manager/actions'

export const Item = ({ latitude, longitude, coordinates, address, navigate }) => {

    const dispatch = useDispatch()

    const assignCoordsAndNavigate = (coordinates, navigate) =>{
        dispatch(assignStartCoordinates(coordinates))
        navigate.navigate('Nearby')
    }
    
    return (
        <View style={styles.item}>
            <View onStartShouldSetResponder={()=>assignCoordsAndNavigate(coordinates, navigate)}>
                <Text style={styles.title}> {address} </Text>
            </View>
            <Text>{latitude} : {longitude}</Text>
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