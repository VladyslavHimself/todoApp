import React from "react";
import classes from './Toolbox.module.scss';

export const Toolbox = () => (
    <div className={classes.toolbox}>
        <div className={`${classes.toolbox__button} ${classes.red}`} id='close' />
        <div className={`${classes.toolbox__button} ${classes.yellow}`} id='important' />
        <div className={`${classes.toolbox__button_extended} ${classes.green}`} id='complete' />
    </div>
)