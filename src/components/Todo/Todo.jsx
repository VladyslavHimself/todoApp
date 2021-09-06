import React, {useState} from "react";

import classes from './todo.module.scss';

import {Heading} from "../Heading/Heading";
import {TodoList} from "../TodoList/TodoList";
import {Input} from "../../Ui/Input/Input";


export const Todo = (props) => {

    const [todos, setTodos] = useState([
        {task: 'Wake up', isImportant: false, isDone: true},
        {task: 'Drink Coffee', isImportant: false, isDone: false},
        {task: 'Learn React', isImportant: true, isDone: false},
        {task: 'Repeat', isImportant: false, isDone: false},
    ]);

    return (
        <div className={classes.todo}>
            <Heading title='Your favorite todo!'/>
            <TodoList todos={todos}/>
            <Input/>
        </div>
    )
};