import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {BrowserRouter as Router} from 'react-router-dom';
import {applyMiddleware, compose, createStore} from "redux";
import App from './App';
import rootReducer from "./redux/rootReducer";
import firebase from "firebase/compat";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// redux debugger
const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const firebaseConfig = {
    apiKey: "AIzaSyAfdG1xt2XmdlzLTFUEwBQ6BezEdzqua9c",
    authDomain: "todoapp-b6c76.firebaseapp.com",
    databaseURL: "https://todoapp-b6c76-default-rtdb.firebaseio.com",
    projectId: "todoapp-b6c76",
    storageBucket: "todoapp-b6c76.appspot.com",
    messagingSenderId: "1093447404387",
    appId: "1:1093447404387:web:2f66ee6421868de995e156",
    measurementId: "G-X0W4P2EFRZ"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const store = createStore(rootReducer, composeEnhancers(applyMiddleware()));

const application = (
    <Router>
        <Provider store={store}>
            <App />
        </Provider>
    </Router>
)

ReactDOM.render(
    application,
  document.getElementById('root'),
);
