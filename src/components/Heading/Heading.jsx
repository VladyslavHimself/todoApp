import React from "react";

import classes from './Heading.module.scss';

export const Heading = (props) => (
    <div className={classes.heading}>
        <h1>{props.title}</h1>
    </div>
);