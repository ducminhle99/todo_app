import {createStore} from 'redux';
import todo from '../reducers/index'
import {loadState, saveState} from "./localStorage";

export const store = createStore(todo, loadState(), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.subscribe(() => {
    saveState({
        todo: store.getState().todo
    })
})