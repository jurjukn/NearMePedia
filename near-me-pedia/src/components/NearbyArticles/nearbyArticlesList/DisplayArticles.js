import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux'

import { Item } from './Item'

export const DisplayArticles = () => {
    const articles = useSelector(state => state.articles)
    return(
        <FlatList
            data={articles}
            renderItem={({ item }) => <Item title={item.title} distance={item.dist} key={item.title} article={item} />}
            keyExtractor={item => item.title}
        />
    )
}
