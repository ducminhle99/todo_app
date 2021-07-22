import React from 'react';
import TodoForm from "./TodoForm";
import ShowTodo from "./ShowTodo";

function TodoList() {
    return (
        <div>
            <h1>Todo app</h1>
            <TodoForm/>
            <ShowTodo/>
        </div>
    );
}

export default TodoList;