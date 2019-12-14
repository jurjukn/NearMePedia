import React from 'react';
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux'
import { Item } from './Item'

export const DisplaySavedArticles = () => {

    const savedArticles = useSelector(state => state.savedArticles)
    return(
        <FlatList
            data={savedArticles}
            renderItem={({ item }) => <Item articleLat={item.lat} articleLong={item.lon} title={item.title} key={item.title} />}
            keyExtractor={item => item.title}
        />
    )
}
