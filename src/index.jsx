import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {createStore} from "redux";

import App from './App';
import {rootReducer} from "./redux/reducers/rootReducer";

const store = createStore(rootReducer);

const app = (
    <Provider store={store}>
        <App />
    </Provider>
)

ReactDOM.render(
    app,
  document.getElementById('root'),
);
