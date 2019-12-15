import React from 'react';
import { Text, View } from 'react-native';

import { DisplayArticles } from './nearbyArticlesList/DisplayArticles'

const NearbyLocationsScreen = (props) => {

    const coordinates = props.navigation.getParam('coordinates', 'NO-COORDS')

    return(
        <View style={{ flex: 1 }}>
            {coordinates === 'NO-COORDS'? (
                <View>
                    <Text>No Coords selected</Text>
                </View>
            ):(
                <View> 
                    <Text>latitude: {coordinates.latitude} longitude: {coordinates.longitude}</Text>
                    <DisplayArticles coordinates={coordinates} />
                </View>
            )}
        </View>
    )
    
}

export default NearbyLocationsScreen