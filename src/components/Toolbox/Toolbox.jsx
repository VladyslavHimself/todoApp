import React from "react";
import classes from './Toolbox.module.scss';
import { db } from '../../firebase-config';


const Toolbox = (props) => {
    const markTodoAsComplete = () => {
        db.collection('Todos').doc(props.taskId).update({
            isDone: !props.isDone
        });
    }

    const markTodoAsImportant = () => {
        db.collection('Todos').doc(props.taskId).update({
            isImportant: !props.isImportant
        })
    }

    const deleteTodo = () => {
        db.collection('Todos').doc(props.taskId).delete();
    }

    return (
        <div className={classes.toolbox}>
            <div
                 className={`${classes.toolbox__button} ${classes.red}`}
                 id='close'
                 onClick={deleteTodo}
            />
            <div
                 className={`${classes.toolbox__button} ${classes.yellow}`}
                 id='important'
                 onClick={markTodoAsImportant}
            />
            <div
                className={`${classes.toolbox__button_extended} ${classes.green}`}
                id='complete'
                onClick={markTodoAsComplete}
            />
        </div>
    );
};

export default Toolbox;