import React from 'react';  
import { Provider } from 'react-redux'

import store, {persistor} from './src/state_manager/store'
import NearMePedia from './src/NearMePedia'
import { PersistGate } from 'redux-persist/integration/react';


const App = () => {
    return( 
        <Provider store={store}>
            <PersistGate persistor={persistor} loading={null}>
                <NearMePedia />
            </PersistGate>
        </Provider>
    )  
}

export default App