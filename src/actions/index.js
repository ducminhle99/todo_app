import {ADD_NEW_TODO, DONE_TODO, EDIT_TODO, REMOVE_TODO} from "../const";

export const addTodo = content => {
    return {
        type: ADD_NEW_TODO,
        content
    }
}

export const editTodo = (id, content) => {
    return {
        type: EDIT_TODO,
        id,
        content
    }
}

export const removeTodo = id => {
    return {
        type: REMOVE_TODO,
        id
    }
}
export const doneTodo = id => {
    return {
        type: DONE_TODO,
        id
    }
}

