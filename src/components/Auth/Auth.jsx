import React from 'react';
import classes from './Auth.module.scss';
import {AuthGroup} from "../Auth-group/Auth-group";
import LoginGroup from "../Login-group/LoginGroup";
import axios from 'axios';
const Auth = () => {

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

        const regKey = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAfdG1xt2XmdlzLTFUEwBQ6BezEdzqua9c'

        try {
            const response = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAfdG1xt2XmdlzLTFUEwBQ6BezEdzqua9c', userData);
            console.log('success');
        } catch (e) {
            console.log(e);
        }
    }


    return (
        <div className={classes.Auth}>
            <div className={classes.Auth__logo}> Simple #TODO</div>
            <AuthGroup
                getLoginData = { e => getLoginData(e) }
                getPasswordData = { e => getPasswordData(e) }
            />
            <LoginGroup
                userData={userData}
                loginRequest={loginRequest}
            />
        </div>
    );
};

export default Auth;