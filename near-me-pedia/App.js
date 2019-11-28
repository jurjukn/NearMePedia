import React, {Component} from 'react';  
import {StyleSheet, Text, View} from 'react-native';  
      
import Constants from 'expo-constants';

import NavigationTabs from './NavigationTabs';  
      
export default class App extends Component{  
    render(){  
        return(  
            <View style={styles.mainContainer}> 
                <View>
                    <Text style={styles.headerText}>NearMePedia.</Text>    
                </View> 
                <NavigationTabs />
            </View>  
        )  
    }  
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