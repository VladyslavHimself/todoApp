import React from 'react';
import {Switch, Route} from 'react-router-dom';

// items
import classes from './App.module.scss';

// components
import Todo from "./components/Todo/Todo";
import Auth from "./components/Auth/Auth";
import {NotFound} from "./components/NotFound/NotFound";

function App() {

    return (
    <div className={classes.app}>
        <Switch>
            <Route path='/todo' component={Todo} />
            <Route path='/auth' component={Auth} />

            <Route exact path='/' component={Auth} />
            <Route component={NotFound} />
        </Switch>
    </div>
  );
}

export default App;
