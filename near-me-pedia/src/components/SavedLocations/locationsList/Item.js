import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const Item = ({ latitude, longitude, coordinates, address, navigate }) => {


    const assignCoordsAndNavigate = (coordinates, navigate) =>{
        navigate.navigate('Nearby',{coordinates: coordinates})
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