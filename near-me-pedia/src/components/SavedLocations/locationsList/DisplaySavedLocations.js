import React from 'react';
import { FlatList } from 'react-native';

import { useSelector } from 'react-redux'
import { Item } from './Item'

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
