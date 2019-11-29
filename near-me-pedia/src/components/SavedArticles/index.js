import React from 'react';
import { Text, View, Button } from 'react-native';

import { useSelector } from 'react-redux'
import { DisplaySavedArticles } from './DisplaySavedArticles'

const ArticlesScreen = () => {
  
  const shit = useSelector(state => state.savedArticles)

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Articles according to starting coordinates</Text>
      <DisplaySavedArticles />
    </View>
  );
    
}

export default ArticlesScreen
