import React from 'react';
import classes from './Login-group.module.scss';
import {Link} from "react-router-dom";
import {connect} from "react-redux";

const LoginGroup = (props) => (
    <div className={classes['Login-group']}>
        <button className={classes.btn}
                onClick={
                    () => {
                        props.setUserData(props.userData)
                        props.loginRequest()
                    }
                }>
            LogIn
        </button>

        <Link to='/register'>
            Register now!
        </Link>

    </div>
);

function mapDispatchToProps(dispatch) {
    return {
        setUserData: (userData) => dispatch({type: 'SET_USER_DATA', payload: userData}),
    }
}

export default connect(null, mapDispatchToProps)(LoginGroup);