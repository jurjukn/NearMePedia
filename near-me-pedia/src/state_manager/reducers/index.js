import { combineReducers } from 'redux'
import articlesReducer from './articles'
import savedArticlesReducer from './savedArticles'
import savedLocationsReducer from './savedLocations'
import startCoordinatesReducer from './startCoordinates'

export default combineReducers({
    articles: articlesReducer,
    savedArticles: savedArticlesReducer,
    savedLocations: savedLocationsReducer,
    startCoordinates: startCoordinatesReducer
})