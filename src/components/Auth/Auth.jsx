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

    const login = async () => {
        console.log(userData);
        const response = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAfdG1xt2XmdlzLTFUEwBQ6BezEdzqua9c', userData);
        console.log(response.data);
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
                login={login}
            />
        </div>
    );
};

export default Auth;