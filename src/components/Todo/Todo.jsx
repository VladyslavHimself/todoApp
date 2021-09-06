import React from "react";

import classes from './todo.module.scss';

import {Heading} from "../Heading/Heading";
import {Input} from "../../Ui/Input/Input";

import TodoList from "../TodoList/TodoList";





const Todo = (props) => {

    return (
        <div className={classes.todo}>
            <Heading title='Your favorite todo!'/>
            <TodoList/>
            <Input/>
        </div>
    )
};

export default Todo;