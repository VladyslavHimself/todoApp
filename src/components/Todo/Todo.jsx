import React from "react";

import {Heading} from "../Heading/Heading";
import {Input} from "../../Ui/Input/Input";
import TodoList from "../TodoList/TodoList";

import classes from './todo.module.scss';

export const Todo = (props) => (
    <div className={classes.todo}>
        <Heading title='Your favorite todo!'/>
        <TodoList/>
        <Input/>
    </div>
);
