import {
    ADD_DATA_TO_LIST,
    DELETE_TASK_FROM_LIST,
    MARK_TASK_AS_COMPLETE,
    MARK_TASK_AS_IMPORTANT
} from "../actions/actionTypes";

const initialState = {
    todos: [],
}
export const todo = (state = initialState, action) => {

    switch (action.type) {
        case MARK_TASK_AS_COMPLETE: {
            const idx = state.todos.findIndex(todo => todo.id === action.payload);
            const newArr = [...state.todos];
            newArr[idx].isDone = !newArr[idx].isDone;
            return {
                ...state,
                todos: newArr
            };
        }

        case MARK_TASK_AS_IMPORTANT: {
            const idx = state.todos.findIndex(todo => todo.id === action.payload);
            const newArr = [...state.todos];
            newArr[idx].isImportant = !newArr[idx].isImportant;
            return {
                ...state,
                todos: newArr
            };
        }

        case DELETE_TASK_FROM_LIST:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload)
            };

        case ADD_DATA_TO_LIST:
            return {
                ...state,
                todos: [ ...state.todos, action.payload],
            }


        default: return state;
    }
}