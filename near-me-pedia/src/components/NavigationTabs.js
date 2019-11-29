import React from 'react';
import { Text, View, Button } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';


import NearbyLocationsScreen from './NearbyArticles'
import SavedArticlesScreen from './SavedArticles'
import SavedLocationsScreen from './SavedLocations'

const AppNavigator = createMaterialTopTabNavigator(  
  {  
      Nearby: NearbyLocationsScreen,  
      Locations: SavedLocationsScreen,  
      Articles: SavedArticlesScreen
  },  
  {  
      tabBarOptions: {  
          activeTintColor: 'white',  
          showIcon: true,  
          showLabel:true,  
          style: {  
              backgroundColor:'blue'  
          }  
      },  
  }  
) 

export default createAppContainer(AppNavigator)
