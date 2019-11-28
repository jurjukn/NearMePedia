import React, {Component} from 'react';  

import store from './src/state_manager/store'
import { Provider } from 'react-redux'

import NearMePedia from './src/NearMePedia'
      
export default class App extends Component{  

    render(){  
        return(  
            <Provider store={store}>
                <NearMePedia />
            </Provider>
        )  
    }  
}  
