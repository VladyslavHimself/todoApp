import React from "react";

import classes from './TodoListItem.module.scss';
import {Toolbox} from "../Toolbox/Toolbox";

export const TodoListItem = (props) => {
    const { task, isImportant } = props;

    return (
        <div className={classes['todoList-item']}>
            <div className={classes['todoList-item__row']}>
                <div className={classes['todoList-item__name']}>{task}</div>
                {
                    isImportant ? <span className={classes['important']}>!!!</span> : null
                }
                <Toolbox />
            </div>

            <hr className={classes['todoList-item__line']} />
        </div>
    );
};
