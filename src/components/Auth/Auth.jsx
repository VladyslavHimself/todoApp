import React from 'react';
import classes from './Auth.module.scss';
import {AuthGroup} from "../Auth-group/Auth-group";
import LoginGroup from "../Login-group/LoginGroup";
import axios from 'axios';
import {setLoginStatusToActive} from "../../redux/actions/actions";
import {connect} from "react-redux";
import { useHistory } from 'react-router-dom';

 // #TODO Do redirect, using session storage & autologin via local storage
const Auth = (props) => {
    let history = useHistory();
    const userData = {
        email: null,
        password: null,
        returnSecureToken: true,
    }

    const getLoginData = (e) => {
        userData.email = e.target.value;
    }

    const getPasswordData = (e) => {
        userData.password = e.target.value;
    }

    const loginRequest = async () => {

        try {
            const response = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAfdG1xt2XmdlzLTFUEwBQ6BezEdzqua9c', userData);
            if (response.status === 200) {
                await props.setLoginStatusToActive();

                sessionStorage.setItem('isAuthenticated', true);

                history.push('/todo');
            }
        } catch (e) {
            console.log(e);
            window.alert('Email or password does not exist!');
        }
    }

    return (
        <div className={classes.Auth}>
            <div className={classes.Auth__logo}> Simple <span className={classes.todoText}>#TODO</span></div>
            <AuthGroup
                getLoginData = { e => getLoginData(e) }
                getPasswordData = { e => getPasswordData(e) }
            />
            <LoginGroup
                buttonName={'LogIn'}
                userData={userData}
                loginRequest={loginRequest}
            />
        </div>
    );
};

function mapDispatchToProps(dispatch) {
    return {
        setLoginStatusToActive: () => dispatch(setLoginStatusToActive()),
    }
}

export default connect(null, mapDispatchToProps)(Auth);