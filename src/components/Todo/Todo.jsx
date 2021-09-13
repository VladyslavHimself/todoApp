import React from "react";
import classes from './todo.module.scss';
import {Heading} from "../Heading/Heading";
import Input from "../../Ui/Input/Input";
import TodoList from "../TodoList/TodoList";

const Todo = () => {
    const userId = localStorage.getItem('user');
    return (
        <div className={classes.todo}>
            <Heading title='Your favorite todo!!'/>
            <TodoList userId={userId}/>
            <Input userId={userId}/>
        </div>
    )
};

export default Todo;