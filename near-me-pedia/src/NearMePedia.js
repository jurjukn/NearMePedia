import React from 'react';  
import {StyleSheet, Text, View} from 'react-native';  
import Constants from 'expo-constants';

import NavigationTabs from './components/NavigationTabs';  

const NearMePedia = () => {
    return(  
        <View style={styles.mainContainer}> 
            <Text style={styles.headerText}>NearMePedia.</Text>    
            <NavigationTabs />
        </View> 
    )  
}

const styles = StyleSheet.create({  
    mainContainer: {
        flex: 1,
        backgroundColor: "blue",
        paddingTop: Constants.statusBarHeight
        },
    headerText:{  
        fontSize: 28,
        color: "white",
        padding:5
    }  
});  

export default NearMePedia