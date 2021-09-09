import React from 'react';
import {Link} from "react-router-dom";
import {connect} from "react-redux";

import classes from './Login-group.module.scss';

const LoginGroup = (props) => (
    <div className={classes['Login-group']}>
        <button className={classes.btn}
                onClick={
                    () => {
                        props.setUserData(props.userData)
                        props.loginRequest()
                    }
                }>
            {props.buttonName}
        </button>
        {
            !props.withRegisterField ? null

            : <Link to='/register'>
                Register now!
              </Link>
        }


    </div>
);

function mapDispatchToProps(dispatch) {
    return {
        setUserData: (userData) => dispatch({type: 'SET_USER_DATA', payload: userData}),
    }
}

export default connect(null, mapDispatchToProps)(LoginGroup);