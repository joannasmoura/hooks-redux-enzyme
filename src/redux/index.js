import { combineReducers } from "redux";
import {todoApp} from './reducer';

export const Reducers = combineReducers({
    todos: todoApp
})