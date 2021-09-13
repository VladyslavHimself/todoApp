import React, {useState} from "react";

import classes from './Input.module.scss';
import { db } from '../../firebase-config';
import firebase from "firebase/compat";


const Input = (props) => {

    const [todoInput, setTodoInput] = useState('');

    const postTodoItemToDB = (e) => {
        db.collection(props.userId).add({
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            task: todoInput,
            isImportant: false,
            isDone: false
        });
    };



    const getDataFromInput = (e) => {

        if (e.key === 'Enter' && todoInput !== '') {
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

export default Input;