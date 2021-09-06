import React from "react";

import classes from './todo.module.scss';

import {Heading} from "../Heading/Heading";
import {TodoList} from "../TodoList/TodoList";
import {Input} from "../../Ui/Input/Input";


export const Todo = () => (
    <div className={classes.todo}>
        <Heading title='Your favorite todo!' />
        <TodoList />
        <Input />
    </div>
)