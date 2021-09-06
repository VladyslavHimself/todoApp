import React from "react";
import classes from './Toolbox.module.scss';
import {connect} from "react-redux";

const Toolbox = (props) => {

    const { taskId } = props;

    return (
        <div className={classes.toolbox}>
            <div className={`${classes.toolbox__button} ${classes.red}`} id='close' />
            <div className={`${classes.toolbox__button} ${classes.yellow}`} id='important' />
            <div className={`${classes.toolbox__button_extended} ${classes.green}`} id='complete' onClick={() => props.markAsComplete(taskId)} />
        </div>
    )
};

function mapStateToProps(state) {
    return {
        todos: state.todos
    }
}

function mapDispatchToProps(dispatch) {
    return {
        markAsComplete: taskId => dispatch({ type: 'MARK_TASK_AS_COMPLETE', payload: taskId}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Toolbox);