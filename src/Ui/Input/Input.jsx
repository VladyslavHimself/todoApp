import React, {useState} from "react";

import classes from './Input.module.scss';
import {connect} from "react-redux";

import { db } from '../../firebase-config';
import firebase from "firebase/compat";


const Input = (props) => {

    const [todoInput, setTodoInput] = useState('');

    const postTodoItemToDB = (e) => {
        db.collection('Todos').add({
            task: todoInput,
            isImportant: false,
            isDone: false
        });
    };

    const { todos } = props;

    const getDataFromInput = (e) => {

        const todoDataTemplate = {
            id: todos.length + 1,
            task: todoInput,
            isImportant: false,
            isDone: false
        };

        if (e.key === 'Enter' && todoInput !== '') {
            // props.addDataToList(todoDataTemplate);
            postTodoItemToDB(e);
            setTodoInput('');
        }
    }

    return (
        <div className={classes.input}>
            <input
                type="text"
                placeholder='Type here your #todo and press Enter'
                value={todoInput}
                onChange={ e => setTodoInput(e.target.value)}
                onKeyDown={ e => getDataFromInput(e)}
            />
        </div>
    )
};

function mapStateToProps(state) {
    return {
        todos: state.todo.todos,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addDataToList: (data) => dispatch({ type: 'ADD_DATA_TO_LIST', payload: data}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Input);