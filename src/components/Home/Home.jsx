import React from 'react';
import classes from './Home.module.scss';

export const Home = () => (
    <div className='Auth'>
        <div className="Auth__logo"> Simple #TODO</div>
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
                LogIn
            </button>
            <a href="/register">
                Register now!
            </a>
        </div>
    </div>
)