import React from "react";

import classes from './Input.module.scss';

export const Input = () => (
    <div className={classes.input}>
        <input type="text"  placeholder='Type here your #todo and press Enter'/>
    </div>
);