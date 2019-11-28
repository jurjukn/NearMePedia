import React from 'react';
import { Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

class NearbyLocationsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Locatiions close to starting point</Text>
      </View>
    );
  }
}

class LocationsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>My saved locations screen</Text>
      </View>
    );
  }
}

class ArticlesScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Articles according to starting coordinates</Text>
      </View>
    );
  }
}

const AppNavigator = createMaterialTopTabNavigator(  
  {  
      Nearby: NearbyLocationsScreen,  
      Locations: LocationsScreen,  
      Articles: ArticlesScreen
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

export default createAppContainer(AppNavigator);  
