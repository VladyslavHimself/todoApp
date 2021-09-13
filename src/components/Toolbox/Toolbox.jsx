import React from "react";
import classes from './Toolbox.module.scss';
import { db } from '../../firebase-config';


const Toolbox = (props) => {

    const userId = localStorage.getItem('user');

    const markTodoAsComplete = () => {
        db.collection(userId).doc(props.taskId).update({
            isDone: !props.isDone
        });
    }

    const markTodoAsImportant = () => {
        db.collection(userId).doc(props.taskId).update({
            isImportant: !props.isImportant
        })
    }

    const deleteTodo = () => {
        db.collection(userId).doc(props.taskId).delete();
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