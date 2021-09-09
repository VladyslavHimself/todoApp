import {todo} from './reducers/todo';
import {auth} from './reducers/auth';
import {combineReducers} from 'redux';
export default combineReducers({
    todo,
    auth,
})