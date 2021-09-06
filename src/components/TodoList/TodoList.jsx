import React from "react";

import {TodoListItem} from "../TodoListItem/TodoListItem";
import classes from './TodoList.module.scss';
import {connect} from "react-redux";

const TodoList = (props) => {

    const { todos } = props;

    return (
        <div className={classes.todoList}>
            {
                todos.map((todo, idx) => {
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
            }
        </div>
    )
}

function mapStateToProps(state) {
    return { todos: state.todos }
}

export default connect(mapStateToProps)(TodoList);