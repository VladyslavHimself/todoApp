import React, {useEffect, useState} from "react";
import {TodoListItem} from "../TodoListItem/TodoListItem";
import classes from './TodoList.module.scss';

import { db } from '../../firebase-config';

const TodoList = (props) => {
    const [TodoList, setTodoList] = useState([]);
    function getTodoListFromServer() {

        db.collection(props.userId).orderBy("createdAt", "asc").onSnapshot((query) => {
            setTodoList(
                query.docs.map((doc) => ({
                    id: doc.id,
                    task: doc.data().task,
                    isImportant: doc.data().isImportant,
                    isDone: doc.data().isDone,
                    createdAt: doc.data().createdAt,
                }))
            );
        });
    }

    useEffect(() => {
        getTodoListFromServer();
    })

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

export default TodoList;