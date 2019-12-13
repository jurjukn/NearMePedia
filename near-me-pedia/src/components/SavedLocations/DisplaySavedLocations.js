import React from 'react';
import { View, Text, FlatList, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants'

import { useSelector, useDispatch } from 'react-redux'
import { assignStartCoordinates } from './../../state_manager/actions'

const Item = ({ latitude, longitude, coordinates, address, navigate }) => {

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

export const DisplaySavedLocations = (props) => {

    const savedLocations = useSelector(state => state.savedLocations)
    return(
        <FlatList
            data={savedLocations}
            renderItem={
                ({ item }) => 
                    <Item 
                        longitude={item.coordinates.longitude} 
                        latitude={item.coordinates.latitude} 
                        key={item.coordinates.latitude + item.coordinates.longitude} 
                        coordinates = {item.coordinates}
                        address = {item.address}
                        navigate = {props.navigate}
                    />
            }
            keyExtractor={item => (item.coordinates.latitude + item.coordinates.longitude)}
        />
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: Constants.statusBarHeight,
    },
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