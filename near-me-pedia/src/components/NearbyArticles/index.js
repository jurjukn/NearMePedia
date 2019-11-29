import React, { useEffect } from 'react';
import { Text, View, FlatList, StyleSheet, Linking } from 'react-native';
import Constants from 'expo-constants';

import { useSelector, useDispatch } from 'react-redux'

import { assignArticles } from './../../state_manager/actions'

const NearbyLocationsScreen = () => {

    const gscoord1 = "46.492550"
    const gscoord2 = "11.320850"

    const JsonFromApi = (gscoord1, gscoord2) => {
        var url = "https://en.wikipedia.org/w/api.php"; 
        var params = {
            action: "query",
            list: "geosearch",
            gscoord: gscoord1+"|"+gscoord2,
            gsradius: "10000",
            gslimit: "10",
            format: "json"
        };
        url = url + "?origin=*";
        Object.keys(params).forEach(function(key){url += "&" + key + "=" + params[key];});
        fetch(url)
            .then(function(response){return response.json();})
            .then(function(response) {
                var pages = response.query.geosearch;
                console.log(pages)
                // for (var place in pages) {
                //     console.log(pages[place].title);
                // }
            })
            .catch(function(error){console.log(error);});
    }

    
    const dispatch = useDispatch();

    useEffect(()=>{

        var url = "https://en.wikipedia.org/w/api.php"; 
        var params = {
            action: "query",
            list: "geosearch",
            gscoord: gscoord1+"|"+gscoord2,
            gsradius: "10000",
            gslimit: "200",
            format: "json"
        };
        url = url + "?origin=*";
        Object.keys(params).forEach(function(key){url += "&" + key + "=" + params[key];});
        fetch(url)
            .then(function(response){return response.json();})
            .then(function(response) {
                var pages = response.query.geosearch;
                dispatch(assignArticles(pages))
                // for (var place in pages) {
                //     console.log(pages[place].title);
                // }
            })
            .catch(function(error){console.log(error);});

    }, [gscoord1, gscoord2])

    const shit = useSelector(state => state.articles)

    function Item({ title, distance }) {
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

    return(
        <View style={{ flex: 1 }}>
            <Text>gscoord1: {gscoord1} gscoord2: {gscoord2}</Text>
            <Text>Articles close to starting point:</Text>
            {console.log(shit)}
           
            <FlatList
                data={shit}
                renderItem={({ item }) => <Item title={item.title} distance={item.dist} key={item.title} />}
                keyExtractor={item => item.title}
            />
           
        </View>
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

export default NearbyLocationsScreen