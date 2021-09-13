import React from 'react';
import {Link} from "react-router-dom";
import {connect} from "react-redux";


import classes from './Login-group.module.scss';
import {setUserData} from "../../redux/actions/actions";

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

        <Link to='/register'>
            Register now!
        </Link>
    </div>
);

function mapDispatchToProps(dispatch) {
    return {
        setUserData: (userData) => dispatch(setUserData(userData)),
    }
}

export default connect(null, mapDispatchToProps)(LoginGroup);