import React from "react";

import classes from './TodoListItem.module.scss';
import {Toolbox} from "../Toolbox/Toolbox";

export const TodoListItem = () => (
    <div className={classes['todoList-item']}>
        <div className={classes['todoList-item__row']}>
            <div className={classes['todoList-item__name']}>Wake up</div>
            <Toolbox />
        </div>

        <hr className={classes['todoList-item__line']} />
    </div>
);
