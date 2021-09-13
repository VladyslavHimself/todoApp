import React from "react";
import classes from './Toolbox.module.scss';
import {connect} from "react-redux";
import {deleteItemFromList, markAsComplete, markAsImportant} from "../../redux/actions/actions";


import { db } from '../../firebase-config';
import firebase from "firebase/compat";

const Toolbox = (props) => {

    console.log(props.taskId)


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

    const { taskId } = props;
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

function mapStateToProps(state) {
    return {todos: state.todos}
};

function mapDispatchToProps(dispatch) {
    return {
        markAsComplete: taskId => dispatch(markAsComplete(taskId)),
        markAsImportant: taskId => dispatch(markAsImportant(taskId)),
        deleteItemFromList: taskId => dispatch(deleteItemFromList(taskId)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Toolbox);