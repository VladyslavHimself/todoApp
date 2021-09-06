
const initialState = {
    todos: [
        {task: 'Wake up', isImportant: false, isDone: true},
        {task: 'Drink Coffee', isImportant: false, isDone: false},
        {task: 'Learn React', isImportant: true, isDone: false},
        {task: 'Repeat', isImportant: false, isDone: false},
    ]
}


export const rootReducer = (state = initialState, action) => {
    switch (action.types) {
        default: return state;
    }
}