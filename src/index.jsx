import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {BrowserRouter as Router} from 'react-router-dom';
import {applyMiddleware, compose, createStore} from "redux";
import App from './App';
import rootReducer from "./redux/rootReducer";
// redux debugger
const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

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
