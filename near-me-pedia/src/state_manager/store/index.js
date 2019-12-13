import { createStore } from 'redux'
import rootReducer from '../reducers'

import { AsyncStorage } from 'react-native'
import { persistStore, persistReducer } from 'redux-persist';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default store = createStore(persistedReducer)
export const persistor = persistStore(store);
