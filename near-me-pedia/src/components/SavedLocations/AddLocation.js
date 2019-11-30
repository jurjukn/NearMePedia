import React, { useState } from 'react';
import { View, Button, TextInput, StyleSheet } from 'react-native';

import { useDispatch } from 'react-redux'

import { addLocation } from './../../state_manager/actions'

export const AddLocation = () => {

    const dispatch = useDispatch();

    const [value, setValue] = useState('')
    addTodo = () => {
		if (value.length > 0) {
            console.log("Convert address (value) to coordinates using goecode API, for now adding hardcoded coords")
            // var url = "https://en.wikipedia.org/w/api.php"; 
            // var params = {
            //     action: "query",
            //     prop: "coordinates",
            //     titles: value,
            //     format: "json"
            // };
            // url = url + "?origin=*";
            // Object.keys(params).forEach(function(key){url += "&" + key + "=" + params[key];});
            // fetch(url)
            //     .then(function(response){return response.json();})
            //     .then(function(response) {
            //         var pages = response.query.pages;
            //         for (var page in pages) {
            //             console.log("FOOOOUND COORDS: ")
            //             console.log("Latitute: " + pages[page].coordinates[0].lat);
            //             console.log("Longitude: " + pages[page].coordinates[0].lon);
            //         }
            //     })
            //     .catch(function(error){console.log(error);});
            dispatch(addLocation({latitude: "54.6861774", longitude: "25.285908"}))
		}
	}

    return(
        <View>
            <TextInput 
            placeholder="Add address you would like"
            placeholderTextColor="#abbabb"
            value={value}
            onChangeText={value => setValue(value)}
          />          
          <Button 
            title="Add"
            onPress={() => addTodo()}
          />
        </View>
    )
}

