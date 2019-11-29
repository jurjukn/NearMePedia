import { combineReducers } from 'redux'
import articlesReducer from './articles'
import savedArticlesReducer from './savedArticles'

export default combineReducers({
    articles: articlesReducer,
    savedArticles: savedArticlesReducer
})