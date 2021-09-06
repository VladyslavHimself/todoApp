import React from "react";

import {TodoListItem} from "../TodoListItem/TodoListItem";
import classes from './TodoList.module.scss';

export const TodoList = () => (
    <div className={classes.todoList}>
        <TodoListItem
            isImportant={false}
            task={'Wake up'}
        />

    </div>
);