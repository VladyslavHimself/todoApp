import React from "react";

import classes from './TodoListItem.module.scss';
import Toolbox from "../Toolbox/Toolbox";

export const TodoListItem = (props) => {
    const { id, task, isImportant, isDone } = props;
    console.log(id);
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
                <Toolbox taskId={id} isDone={isDone} isImportant={isImportant} />
            </div>

            <hr className={classes['todoList-item__line']} />
        </div>
    );
};
