import React from 'react';
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux'
import { Item } from './Item'

export const DisplaySavedArticles = () => {
    const savedArticles = useSelector(state => state.savedArticles)
    return(
        <FlatList
            data={savedArticles}
            renderItem={({ item }) => <Item title={item.title} distance={item.dist} key={item.title} article={item} />}
            keyExtractor={item => item.title}
        />
    )
}
