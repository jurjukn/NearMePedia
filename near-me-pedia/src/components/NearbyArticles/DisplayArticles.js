import React from 'react';
import { Text, View, FlatList, StyleSheet, Linking, Button } from 'react-native';
import Constants from 'expo-constants';
import { useSelector, useDispatch } from 'react-redux'

import { addArticle } from './../../state_manager/actions'


const Item = ({ title, distance, article }) => {

    const dispatch = useDispatch();
    const transformedToLink = title.split(' ').join('_');
    return (
        <View style={styles.item}>
            <View onStartShouldSetResponder={() => Linking.openURL('https://en.wikipedia.org/wiki/'+transformedToLink)}>
                <Text style={styles.title}>{title} </Text>
            </View>
            <Text>Distance: {distance}</Text>
            <Button title="Save" onPress={() => dispatch(addArticle(article))} />
        </View>
    )
}

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