import { combineReducers } from 'redux'
import savedArticlesReducer from './savedArticles'
import savedLocationsReducer from './savedLocations'

export default combineReducers({
    savedArticles: savedArticlesReducer,
    savedLocations: savedLocationsReducer,
})