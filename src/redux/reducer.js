const { ADD_TODO, TOGGLE_TODO } = require("./actionTypes");

const initialState = {
    todos:[]
}

export const todoApp = (state = initialState, action) => {
    switch(action.type){
        case ADD_TODO: {
            return {
                ...state,
                todos: [...state.todos, action.text]
            }
        }
        case TOGGLE_TODO: {
            let todos = state.todos;
            let todoIndex = todos.findIndex( todo => todo == action.text);
            todos[todoIndex] = 'Completed';
            return{
                ...state,
                todos: todos
            }
        }
        default:
            return state
    }   
}
