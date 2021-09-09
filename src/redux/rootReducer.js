import {combineReducers} from 'redux';

import {todo} from './reducers/todo';
import {auth} from './reducers/auth';

export default combineReducers({
    todo,
    auth,
});