import React from "react";

import classes from './todo.module.scss';

export const Todo = () => (
    <div className={classes.todo}>
        <div className="heading">
            <h1>Your favorite todo!</h1>
        </div>

        <div className={classes.todoList}>
            <div className={classes['todoList-item']}>
                <div className={classes['todoList-item__row']}>
                    <div className={classes['todoList-item__name']}>Wake up</div>
                    <div className={classes.toolbox}>
                        <div className={`${classes.toolbox__button} ${classes.red}`} id='close' />
                        <div className={`${classes.toolbox__button} ${classes.yellow}`} id='important' />
                        <div className={`${classes.toolbox__button_extended} ${classes.green}`} id='complete' />
                    </div>
                </div>
                <hr className={classes['todoList-item__line']} />
            </div>
        </div>

        <div className={classes.input}>
            <input type="text"  placeholder='Type here your #todo and press Enter'/>
        </div>
    </div>
)