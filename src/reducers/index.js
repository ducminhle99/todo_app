import {combineReducers} from "redux";
import {todosReducer} from "./todosReducer";

export default combineReducers({
    todo: todosReducer
})