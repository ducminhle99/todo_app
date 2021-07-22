import {ADD_NEW_TODO, DONE_TODO, EDIT_TODO, REMOVE_TODO} from "../const";

function initTodos() {
    return []
}

export const todosReducer = (state = initTodos(), action) => {
    switch (action.type) {
        case ADD_NEW_TODO:
            const generateID = new Date().getTime();
            let newTodo = {
                id: generateID,
                content: action.content,
                isComplete: false
            }
            state = [...state, newTodo]
            return state;

        case EDIT_TODO:
            const editIndex = state.findIndex(todo => {
                return todo.id === action.id;
            })
            if (editIndex !== -1) {
                let newState = [...state];
                newState[editIndex].content = action.content;
                console.log("edit :", newState[editIndex].content);
                return newState;
            }
            break
        case REMOVE_TODO:
            const removeIndex = action.id;
            state = state.filter(todo => {
                if (todo.id === removeIndex) return false;
                return true;
            })
            return state;
        case DONE_TODO:
            const doneIndex = state.findIndex(todo => {
                return todo.id === action.id;
            })
            if (doneIndex !== -1) {
                let newState = [...state];
                newState[doneIndex].isComplete = !state[doneIndex].isComplete;
                console.log("log done: ", newState[doneIndex])
                return newState;
            }
            break

        default:
            return state;
    }
}