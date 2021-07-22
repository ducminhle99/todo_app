import {APP_TODOS_KEY} from "../const";

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem(APP_TODOS_KEY);
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (e) {
        console.warn(e);
        return undefined;
    }
};

export const saveState = state => {
    try {
        const data = JSON.stringify(state);
        localStorage.setItem(APP_TODOS_KEY, data);
    } catch (e) {
        console.warn(e);
    }
}