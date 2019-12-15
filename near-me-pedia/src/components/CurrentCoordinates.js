import React from 'react';
import { Text, View } from 'react-native';

export const CurrentCoordinates = ({coordinates})=>{
    return(
        <View style={{alignContent:"center", backgroundColor:"#4169E1"}}>
            <Text style={{ textAlign:"center", color: "#E6E6FA" }}> Current Coordinates</Text>
            <Text style={{ textAlign:"center", fontSize:24, color: "white" }}>{coordinates.latitude} : {coordinates.longitude}</Text>
        </View>
    )
}