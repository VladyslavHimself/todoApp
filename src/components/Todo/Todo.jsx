import React, {useEffect} from "react";
import {connect} from 'react-redux';

import classes from './todo.module.scss';

import {Heading} from "../Heading/Heading";
import Input from "../../Ui/Input/Input";
import TodoList from "../TodoList/TodoList";
import {db} from "../../firebase-config";


const Todo = (props) => {



    return (
        <div className={classes.todo}>
            <Heading title='Your favorite todo!'/>
            <TodoList/>
            <Input/>
        </div>
    )
};

function mapStateToProps(state) {
    return {
        todos: state.todo.todos
    }
}

export default  connect(mapStateToProps)(Todo);