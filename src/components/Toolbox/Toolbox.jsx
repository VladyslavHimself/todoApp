import React from "react";
import classes from './Toolbox.module.scss';
import {connect} from "react-redux";
import {deleteItemFromList, markAsComplete, markAsImportant} from "../../redux/actions/actions";

const Toolbox = (props) => {
    const { taskId } = props;
    return (
        <div className={classes.toolbox}>
            <div
                 className={`${classes.toolbox__button} ${classes.red}`}
                 id='close'
                 onClick={() => props.deleteItemFromList(taskId)}
            />
            <div
                 className={`${classes.toolbox__button} ${classes.yellow}`}
                 id='important'
                 onClick={() => props.markAsImportant(taskId)}
            />
            <div
                className={`${classes.toolbox__button_extended} ${classes.green}`}
                id='complete'
                onClick={() => props.markAsComplete(taskId)}
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