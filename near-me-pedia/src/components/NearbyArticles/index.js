import React from 'react';
import { Text, View } from 'react-native';

import { DisplayArticles } from './nearbyArticlesList/DisplayArticles'
import { CurrentCoordinates } from './../CurrentCoordinates'

const NearbyLocationsScreen = (props) => {

    const coordinates = props.navigation.getParam('coordinates', 'NO-COORDS')

    return(
        <View style={{ flex: 1, backgroundColor:"#E6E6FA" }}>
            {coordinates === 'NO-COORDS'? (
                <View>
                    <Text style={{ textAlign:"center", color:"white" }}>No coordinates selected</Text>
                </View>
            ):(
                <View> 
                    <CurrentCoordinates coordinates={coordinates} />
                    <DisplayArticles coordinates={coordinates} />
                </View>
            )}
        </View>
    )
}

export default NearbyLocationsScreen