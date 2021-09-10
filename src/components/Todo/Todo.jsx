import React, {useEffect} from "react";
import {connect} from 'react-redux';

import classes from './todo.module.scss';

import {Heading} from "../Heading/Heading";
import Input from "../../Ui/Input/Input";
import TodoList from "../TodoList/TodoList";


const Todo = (props) => {

    useEffect(() => {
        console.log('initialized');
        if (sessionStorage.getItem('isAuthenticated') === 'true') {

        }
    }, );

    return (
        <div className={classes.todo}>
            <Heading title='Your favorite todo!'/>
            {
                props.todos.length > 0 ? <TodoList/> : <p style={{opacity: '.6'}}>You can add tasks by typing the input below</p>
            }
            <Input/>
        </div>
    );
}




function mapStateToProps(state) {
    return {
        todos: state.todo.todos
    }
}

export default  connect(mapStateToProps)(Todo);