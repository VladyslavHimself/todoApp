import React from "react";

import classes from './TodoListItem.module.scss';
import {Toolbox} from "../Toolbox/Toolbox";

export const TodoListItem = (props) => {
    const { task, isImportant, isDone } = props;

    return (
        <div className={classes['todoList-item']}>
            <div className={classes['todoList-item__row']}>
                <div className={classes['todoList-item__name']}>
                    {
                        !isDone ? task : <strike style={{fontWeight: 'light'}}> {task} </strike>
                    }
                </div>
                    {
                        !isImportant ? null : <span className={classes['important']}>!!!</span>
                    }
                <Toolbox />
            </div>

            <hr className={classes['todoList-item__line']} />
        </div>
    );
};
