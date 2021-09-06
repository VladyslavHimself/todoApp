import React from "react";

import {TodoListItem} from "../TodoListItem/TodoListItem";
import classes from './TodoList.module.scss';

export const TodoList = (props) => {

    const {todos} = props;

    console.log(todos);

    return (
        <div className={classes.todoList}>
            {
                todos.map((todo, idx) => {
                    return (
                        <TodoListItem
                            key={idx}
                            isImportant={false}
                            task={todo.task}
                        />
                    );
                })
            }
        </div>
    )
};