import React from 'react';
import { Text, View, FlatList, StyleSheet, Linking, Button } from 'react-native';
import Constants from 'expo-constants';
import { useSelector, useDispatch } from 'react-redux'


const Item = ({ title, distance, article }) => {

    const transformedToLink = title.split(' ').join('_');
    return (
        <View style={styles.item}>
            <View onStartShouldSetResponder={() => Linking.openURL('https://en.wikipedia.org/wiki/'+transformedToLink)}>
                <Text style={styles.title}>{title} </Text>
            </View>
            <Text>Distance: {distance}</Text>
        </View>
    )
}

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