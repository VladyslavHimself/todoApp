import update from 'react-addons-update';

const initialState = {
    todos: [
        {id: 0, task: 'Wake up', isImportant: false, isDone: false},
        {id: 1, task: 'Drink Coffee', isImportant: false, isDone: false},
        {id: 2, task: 'Learn React', isImportant: true, isDone: false},
        {id: 3, task: 'Repeat', isImportant: false, isDone: false},
    ]
}


export const rootReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'MARK_TASK_AS_COMPLETE':
            const idx = state.todos.findIndex(todo => todo.id === action.payload);
            const newArr = [...state.todos];
            newArr[idx].isDone = true;
            return {
                ...state,
                todos: newArr
            };

        case 'MARK_TASK_AS_IMPORTANT':
            return state;

        default: return state;
    }
}