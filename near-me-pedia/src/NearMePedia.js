import React from 'react';  
import {StyleSheet, Text, View} from 'react-native';  
import Constants from 'expo-constants';

import NavigationTabs from './components/NavigationTabs';  

const NearMePedia = () => {
    return(  
        <View style={styles.mainContainer}> 
            <View>
                <Text style={styles.headerText}>NearMePedia.</Text>    
            </View> 
            <NavigationTabs />
        </View> 
    )  
}

const styles = StyleSheet.create({  
    mainContainer: {
        flex: 1,
        backgroundColor: "#B0E0E6",
        paddingTop: Constants.statusBarHeight
        },
    headerText:{  
        fontWeight: 'bold'
    }  
});  

export default NearMePedia