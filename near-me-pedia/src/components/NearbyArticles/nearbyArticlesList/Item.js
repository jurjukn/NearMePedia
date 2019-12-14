import React from 'react';
import { Text, View, StyleSheet, Linking, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'

import { addArticle } from './../../../state_manager/actions'

export const Item = ({ title, distance, article }) => {

    const savedArticles = useSelector(state => state.savedArticles)
    const dispatch = useDispatch();
    const transformedToLink = title.split(' ').join('_');

    const handleSave = (articleToSave) => {
        const list = savedArticles.filter((item) => articleToSave.pageid === item.pageid)
        if(list.length !== 0){
            alert("Article " + articleToSave.title +" is already in the list")
        }
        else{
            dispatch(addArticle(article))
        }
    }

    return (
        <View style={styles.item}>
            <View onStartShouldSetResponder={() => Linking.openURL('https://en.wikipedia.org/wiki/'+transformedToLink)}>
                <Text style={styles.title}>{title} </Text>
            </View>
            <Text>Distance: {distance}</Text>
            <Button title="Save" onPress={() => handleSave(article)} />
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