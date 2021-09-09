import React, {useEffect} from 'react';
import {Switch, Route} from 'react-router-dom';

// items
import classes from './App.module.scss';

// components
import Todo from "./components/Todo/Todo";
import Auth from "./components/Auth/Auth";
import {NotFound} from "./components/NotFound/NotFound";
import Register from "./components/Register/Register";
import {connect} from "react-redux";

function App(props) {
    return (
    <div className={classes.app}>
            {
                props.isLoggedIn ?
                    <Switch>
                        <Route path='/todo' component={Todo} />
                        <Route exact path='/' component={Auth} />
                        <Route component={NotFound} />
                    </Switch>
                    :
                    <Switch>
                        <Route path='/auth' component={Auth} />
                        <Route path='/register'  component={Register} />
                        <Route exact path='/' component={Auth} />
                        <Route component={NotFound} />
                    </Switch>
            }
    </div>
  );
}

function mapStateToProps(state) {
    return {
        isLoggedIn: state.auth.user.isLoggedIn,
    }
}

export default connect(mapStateToProps)(App);
