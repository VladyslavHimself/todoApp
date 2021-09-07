import React from 'react';
import {Switch, Route, Link } from 'react-router-dom';

// items
import classes from './App.module.scss';

// components
import Todo from "./components/Todo/Todo";
import {Home} from "./components/Home/Home";
import {NotFound} from "./components/NotFound/NotFound";
import {Register} from "./components/Register/Register";

function App() {
    return (
    <div className={classes.app}>
        <Switch>
            <Route path='/todo' component={Todo} />
            <Route path='/auth' component={Home} />
            <Route path='/register' component={Register} />

            <Route exact path='/' component={Home} />
            <Route component={NotFound} />
        </Switch>
    </div>
  );
}

export default App;
