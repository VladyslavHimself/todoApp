import React from 'react';
import classes from './Auth.module.scss';
import AuthGroup from "../Auth-group/Auth-group";
import LoginGroup from "../Login-group/LoginGroup";

export const Auth = () => {

    let email = '';
    let password = '';

    const getLoginData = (e) => {
        email = e.target.value;
    }

    const getPasswordData = (e) => {
        password = e.target.value;
    }

    return (
        <div className={classes.Auth}>
            <div className={classes.Auth__logo}> Simple #TODO</div>
            <AuthGroup
                getLoginData = { e => getLoginData(e) }
                getPasswordData = { e => getPasswordData(e) }
            />
            <LoginGroup
                buttonValue={'LogIn'}
                login={true}
                register={true}
            />
        </div>
    );
}