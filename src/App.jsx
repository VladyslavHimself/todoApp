import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {connect} from "react-redux";
import {Redirect} from 'react-router-dom';
import classes from './App.module.scss';
import Todo from "./components/Todo/Todo";
import Auth from "./components/Auth/Auth";
import {NotFound} from "./components/NotFound/NotFound";
import Register from "./components/Register/Register";
import {Navigation} from "./components/Navigation/Navigation";

function App(props) {

    if (props.isLoggedIn || sessionStorage.getItem('isAuthenticated') === 'true' || localStorage.getItem('isAuthenticated') === 'true') {
        return (
            <div className={classes.app}>
                <Navigation/>
                {
                    <Switch>
                        <Route path='/todo' component={Todo}/>
                        <Route exact path='/' component={Todo}/>
                        <Route component={NotFound}/>
                    </Switch>
                }
            </div>
        );
    } else {
        return (
            <div className={classes.app}>
                {
                    <Switch>
                        <Route path='/auth' component={Auth}/>
                        <Route path='/register' component={Register}/>
                        <Route exact path='/' component={Auth}/>
                        <Redirect to={'/'}/>
                    </Switch>
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        isLoggedIn: state.auth.user.isLoggedIn,
    }
}

export default connect(mapStateToProps)(App);
