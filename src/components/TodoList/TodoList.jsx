import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {TodoListItem} from "../TodoListItem/TodoListItem";
import classes from './TodoList.module.scss';

import firebase from "firebase/compat";
import { db } from '../../firebase-config';

const TodoList = (props) => {
    const { todos } = props;

    const [TodoList, setTodoList] = useState([]);

    function getTodoListFromServer() {
        return db.collection('Todos').onSnapshot((query) => {
            setTodoList(
                query.docs.map((doc) => ({
                    id: doc.id,
                    task: doc.data().task,
                    isImportant: doc.data().isImportant,
                    isDone: doc.data().isDone,
                }))
            );
        });
    }

    useEffect(() => {
        getTodoListFromServer();
    }, [])

    return (
        <div className={classes.todoList}>
            {

                TodoList.length > 0 ? TodoList.map((todo, idx) => {
                        return (
                            <TodoListItem
                                key={idx}
                                id={todo.id}
                                task={todo.task}
                                isImportant={todo.isImportant}
                                isDone={todo.isDone}
                            />
                        );
                    })
                    : <p style={{opacity: '.5', fontSize: '16px'}}> For now, you haven't any tasks. Keep calm :)</p>

            }
        </div>
    )
}

function mapStateToProps(state) {
    return { todos: state.todo.todos }
}

export default connect(mapStateToProps)(TodoList);