import React from 'react';

import classes from './RegisterGroup.module.scss';

export default function RegisterGroup(props) {
    return (
        <div className={classes.RegisterGroup}>
            <button
                onClick={() => {
                    props.registerRequest()
                }}
            >
                Register
            </button>
        </div>
    )
};