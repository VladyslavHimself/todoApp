import React, {useState} from "react";
import { connect } from "react-redux";

import classes from './todo.module.scss';

import {Heading} from "../Heading/Heading";
import {TodoList} from "../TodoList/TodoList";
import {Input} from "../../Ui/Input/Input";




const Todo = (props) => {

    return (
        <div className={classes.todo}>
            <Heading title='Your favorite todo!'/>
            <TodoList todos={props.todos}/>
            <Input/>
        </div>
    )
};

function mapStateToProps(state) {
    return { todos: state.todos }
}

function mapDispatchToProps(dispatch) {

}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);