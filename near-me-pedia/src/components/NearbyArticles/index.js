import React, { useEffect } from 'react';
import { Text, View } from 'react-native';

import { useSelector, useDispatch } from 'react-redux'

import { assignArticles } from './../../state_manager/actions'

import { DisplayArticles } from './DisplayArticles'

const NearbyLocationsScreen = () => {

    const coords = useSelector(state=>state.startCoordinates)

    const longitude = coords.longitude
    const latitude = coords.latitude

    const dispatch = useDispatch();

    useEffect(()=>{
        var url = "https://en.wikipedia.org/w/api.php"; 
        var params = {
            action: "query",
            list: "geosearch",
            gscoord: latitude+"|"+longitude,
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

    }, [latitude, longitude])

    return(
        <View style={{ flex: 1 }}>
            <Text>latitude: {latitude} longitude: {longitude}</Text>
            <Text>Articles close to starting point:</Text>
            <DisplayArticles />
        </View>
    )
    
}

export default NearbyLocationsScreen