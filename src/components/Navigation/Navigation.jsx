import React from 'react';
import classes from './Navigation.module.scss';

export const Navigation = () => {

    const logoutHandler = () => {
        sessionStorage.removeItem('isAuthenticated');
        localStorage.removeItem('isAuthenticated');
        window.location.replace('/');
    }

    return (
        <div className={classes.Navigation}>
            <div className={classes.Navigation__item}
            onClick={logoutHandler}
            >
               ¬
            </div>
        </div>
    )
}