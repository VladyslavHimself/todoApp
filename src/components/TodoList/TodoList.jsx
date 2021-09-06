import React from "react";

import {TodoListItem} from "../TodoListItem/TodoListItem";
import classes from './TodoList.module.scss';

export const TodoList = (props) => {

    const {todos} = props;

    return (
        <div className={classes.todoList}>
            {
                todos.map((todo, idx) => {
                    return (
                        <TodoListItem
                            key={idx}
                            task={todo.task}
                            isImportant={todo.isImportant}
                            isDone={todo.isDone}
                        />
                    );
                })
            }
        </div>
    )
}