import React from 'react';
import { Text, View } from 'react-native';

import { DisplaySavedArticles } from './savedArticlesList/DisplaySavedArticles'

const ArticlesScreen = () => {
  
  return (
    <View style={{ flex: 1, backgroundColor:"#E6E6FA"}}>
      <DisplaySavedArticles />
    </View>
  );
    
}

export default ArticlesScreen
