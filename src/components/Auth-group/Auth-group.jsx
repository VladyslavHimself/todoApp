import React, {useEffect} from "react";
import classes from "./Auth-group.module.scss";
import axios from 'axios';
import {connect} from "react-redux";

 const AuthGroup = props => {
    let email = '';
    let password = '';

     return (
         <div className={classes['Auth-group']}>
             <div className={classes['Auth-group__input']}>
                 <input type="text" placeholder='Enter your e-mail' onChange={e => props.getLoginData(e)} />
             </div>
             <div className={classes['Auth-group__input']}>
                 <input type="password" placeholder='Enter your password' onChange={e => props.getPasswordData(e)}/>
             </div>
         </div>
     );
 };
export default AuthGroup;
