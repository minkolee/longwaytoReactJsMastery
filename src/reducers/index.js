import {ADD_TODO, SET_FILTER, SET_TODO_TEXT, TOGGLE_TODO} from "../actions/actionTypes";
import todos from "./todos";
import filter from "./filter";
import text from "./text";
import {combineReducers} from "redux";


export default combineReducers({
    todos,
    text,
    filter,
})