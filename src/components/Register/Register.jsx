import React from "react";

export const Register = () => (
    <div className='Auth'>
        <div className="Auth__logo"> Register now!</div>
        <div className="Auth-group">
            <div className="Auth-group__input">
                <input type="text" placeholder='Enter your e-mail'/>
            </div>
            <div className="Auth-group__input">
                <input type="text" placeholder='Enter your password'/>
            </div>
        </div>
        <div className="Login">
            <button className='btn'>
                Register
            </button>
        </div>
    </div>
)