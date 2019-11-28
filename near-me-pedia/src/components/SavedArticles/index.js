import React from 'react';
import { Text, View, Button } from 'react-native';

class ArticlesScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Articles according to starting coordinates</Text>
        </View>
      );
    }
  }

export default ArticlesScreen