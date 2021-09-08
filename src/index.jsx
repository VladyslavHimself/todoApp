import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {applyMiddleware, compose, createStore} from "redux";

import App from './App';
import {rootReducer} from "./redux/reducers/rootReducer";

import {BrowserRouter as Router} from 'react-router-dom';

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware()));

const app = (
    <Router>
        <Provider store={store}>
            <App />
        </Provider>
    </Router>
)

ReactDOM.render(
    app,
  document.getElementById('root'),
);
