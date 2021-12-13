import todos from "./todos";
import filter from "./filter";
import text from "./text";
import {combineReducers} from "redux-immutable";


export default combineReducers({
    todos,
    text,
    filter,
})