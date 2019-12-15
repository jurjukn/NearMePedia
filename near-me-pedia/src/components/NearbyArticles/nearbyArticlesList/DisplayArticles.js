import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';

import { Item } from './Item'

export const DisplayArticles = (props) => {

    const [articlesTest, setArticlesTest] = useState([])

    const coords = props.coordinates
    const longitude = coords.longitude
    const latitude = coords.latitude

    async function fetchApi(){
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
                setArticlesTest(pages)
            })
            .catch(function(error){console.log(error);});
    }

    useEffect(()=>{
       fetchApi()

    }, [latitude, longitude])

    return(
        <FlatList
            data={articlesTest}
            renderItem={({ item }) => <Item title={item.title} distance={item.dist} key={item.title} article={item} />}
            keyExtractor={item => item.title}
        />
    )
}
