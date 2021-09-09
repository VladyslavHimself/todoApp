import React from "react";
import classes from "./Auth-group.module.scss";

export const AuthGroup = props => (
     <div className={classes['Auth-group']}>
         <div className={classes['Auth-group__input']}>
             <input type="text" placeholder='Enter your e-mail' onChange={e => props.getLoginData(e)} />
         </div>
         <div className={classes['Auth-group__input']}>
             <input type="password" placeholder='Enter your password' onChange={e => props.getPasswordData(e)}/>
         </div>
     </div>
);
