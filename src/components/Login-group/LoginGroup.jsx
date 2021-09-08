import React from 'react';
import classes from './Login-group.module.scss';
import {Link} from "react-router-dom";
import {connect} from "react-redux";

const LoginGroup = (props) => (
    <div className={classes['Login-group']}>
        <button className={classes.btn}>
            {props.buttonValue}
        </button>
        {
            props.register
            ?  <Link to='/register'>
                    Register now!
               </Link> : null
        }
    </div>
);

function mapStateToProps(state) {

}

function mapDispatchToProps(state) {

}
export default connect()(LoginGroup);