import React, { useEffect } from 'react';
import { Text, View } from 'react-native';

import { useDispatch } from 'react-redux'

import { assignArticles } from './../../state_manager/actions'

import { DisplayArticles } from './DisplayArticles'

const NearbyLocationsScreen = () => {

    const gscoord1 = "46.492550"
    const gscoord2 = "11.320850"

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

    return(
        <View style={{ flex: 1 }}>
            <Text>gscoord1: {gscoord1} gscoord2: {gscoord2}</Text>
            <Text>Articles close to starting point:</Text>
            <DisplayArticles />
        </View>
    )
    
}

export default NearbyLocationsScreen