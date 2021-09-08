import React from "react";
import classes from "./Register.module.scss";
import AuthGroup from "../Auth-group/Auth-group";
import LoginGroup from "../Login-group/LoginGroup";

export const Register = () => (
    <div className={classes.Auth}>
        <div className={classes.Auth__logo}> Register</div>
        <AuthGroup />
        <LoginGroup buttonValue={'Register!'} />
    </div>
);