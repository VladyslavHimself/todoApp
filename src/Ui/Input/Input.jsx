import React from "react";

import classes from './Input.module.scss';
import {connect} from "react-redux";

const Input = (props) => {

    const { todos } = props;

    let inputData = '';

    const getDataFromInput = (e) => {
        if (e.key === 'Enter' && inputData !== '') {
            props.addDataToList(
                {id: todos.length + 1, task: inputData, isImportant: false, isDone: false},
            );
        }
    }

    return (
        <div className={classes.input}>
            <input
                type="text"
                placeholder='Type here your #todo and press Enter'
                onChange={ e => inputData = e.target.value}
                onKeyDown={ e => getDataFromInput(e)}
            />
        </div>
    )
};

function mapStateToProps(state) {
    return {
        todos: state.todos,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addDataToList: (data) => dispatch({ type: 'ADD_DATA_TO_LIST', payload: data}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Input);