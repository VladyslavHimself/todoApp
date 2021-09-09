import React from 'react';
import classes from './Register.module.scss';
import {AuthGroup} from '../Auth-group/Auth-group';
import LoginGroup from "../Login-group/LoginGroup";
import axios from 'axios';


const Register = () => {

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

    const registerRequest = async () => {
        try {
            const response = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAfdG1xt2XmdlzLTFUEwBQ6BezEdzqua9c', userData);
            window.alert('Registered successfully!');
        } catch (e) {
            console.log(e);
            window.alert('Your account does not registered yet, try again...');
        }
    }


    return (
        <div className={classes.Auth}>
            <div className={classes.Auth__logo}> Register </div>
            <AuthGroup
                getLoginData = { e => getLoginData(e) }
                getPasswordData = { e => getPasswordData(e) }
            />
            <LoginGroup
                userData={userData}
                loginRequest={registerRequest}
            />
        </div>
    );
};

export default Register;