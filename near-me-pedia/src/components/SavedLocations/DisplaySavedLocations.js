import React from 'react';
import { View, Text, FlatList, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants'

import { useSelector, useDispatch } from 'react-redux'
import { assignStartCoordinates } from './../../state_manager/actions'

const Item = ({ latitude, longitude, coordinates, navigate }) => {

    const dispatch = useDispatch()
    const assignCoordsAndNavigate = (coordinates, navigate) =>{
        dispatch(assignStartCoordinates(coordinates))
        navigate.navigate('Nearby')
    }
    return (
        <View style={styles.item}>
            <View onStartShouldSetResponder={()=>assignCoordsAndNavigate(coordinates, navigate)}>
                <Text style={styles.title}>{latitude} : {longitude} </Text>
            </View>
            <Text>Address should be display above</Text>
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
                        longitude={item.longitude} 
                        latitude={item.latitude} 
                        key={item.latitude + item.longitude} 
                        coordinates = {item}
                        navigate = {props.navigate}
                    />
            }
            keyExtractor={item => (item.latitude + item.longitude)}
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