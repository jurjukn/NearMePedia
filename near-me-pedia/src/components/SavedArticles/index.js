import React from 'react';
import { Text, View } from 'react-native';

import { DisplaySavedArticles } from './savedArticlesList/DisplaySavedArticles'

const ArticlesScreen = () => {

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Articles according to starting coordinates</Text>
      <DisplaySavedArticles />
    </View>
  );
    
}

export default ArticlesScreen
