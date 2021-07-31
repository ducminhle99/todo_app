import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Todo from "./Todo";
import {doneTodo, editTodo, removeTodo} from "../actions";
import TodoForm from "./TodoForm";

function ShowTodo() {
    const todos = useSelector(state => state.todo);
    const [edit, setEdit] = useState({
        id: null,
        content: ''
    })

    const dispatch = useDispatch();
    // console.log("in ra mang", todos)
    const updateTodo = (id, content) => {
        setEdit({
            id: id,
            content: content
        })
    }

    const submitUpdate = (id, content) => {
        if (content.length > 0)
            dispatch(editTodo(id, content))
        setEdit({
            id: null,
            content: ''
        })
    }
    const completeTodo = (id) => {
        dispatch(doneTodo(id))
    }
    const deleteTodo = (id) => {
        dispatch(removeTodo(id))
    }
    if (edit.id) return <TodoForm edit={edit} submitEdit={submitUpdate}/>;
    return todos.map((todo) =>
        <Todo
            data={todo}
            key={todo.id}
            updateTodo={updateTodo}
            completeTodo={completeTodo}
            removeTodo={deleteTodo}
        />
    );
}

export default ShowTodo;