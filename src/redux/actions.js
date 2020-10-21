import { ADD_TODO, TOGGLE_TODO } from "./actionTypes";

function addTodo(text){
    return{
        type: ADD_TODO,
        text
    }
}

function toggleTodo(text){
    return{
        type:TOGGLE_TODO,
        text
    }
}

export default addTodo