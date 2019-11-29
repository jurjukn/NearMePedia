import React from 'react';  
import { Provider } from 'react-redux'

import store from './src/state_manager/store'
import NearMePedia from './src/NearMePedia'

const App = () => {
    return( 
        <Provider store={store}>
            {console.log(store)}
            <NearMePedia />
        </Provider>
    )  
}

export default App