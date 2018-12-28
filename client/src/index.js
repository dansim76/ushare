import React from 'react';
import ReactDOM from "react-dom"

import {createStore} from "redux"
import  rootReducer from "./reducers"
import {PersistGate} from "redux-persist/integration/react";
import {Provider} from "react-redux"
import { render} from "react-dom"
import storeClass from "./store/index"
import App from "./App"


let stores = storeClass();
let store = stores.store;
let persistor = stores.persistor;

render(


    <Provider store = {store}>
        <PersistGate loading={null} persistor={persistor}>
            <App />
        </PersistGate>

    </Provider>,

    document.getElementById("app")
);

// import './index.css';

// const App = ()=> (



// )

// ReactDOM.render(<App />, document.getElementById('root'));

