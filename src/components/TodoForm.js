import React, {useEffect, useRef, useState} from 'react';
import {useDispatch} from "react-redux";
import {addTodo} from "../actions";

function TodoForm(props) {
    const [content, setContent] = useState(props.edit ? props.edit.content : '');

    const dispatch = useDispatch();

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    })

    const handleChange = e => {
        setContent(e.target.value);
    }

    const handleAdd = e => {
        e.preventDefault();
        if (content.length > 0)
            dispatch(addTodo(content))
        setContent('');
    }

    function handleSubmit() {
        props.submitEdit(props.edit.id, content);
    }

    return (
        <div className="todo-form">
            {props.edit ? (
                <div>
                    <input
                        type="text"
                        placeholder="edit todo"
                        value={content}
                        onChange={handleChange}
                        // name="content"
                        ref={inputRef}
                        className="todo-input edit"
                    />
                    <button className="todo-button edit" onClick={handleSubmit}>update</button>
                </div>
            ) : (
                <div>
                    <input
                        type="text"
                        placeholder="add new todo"
                        value={content}
                        onChange={handleChange}
                        // name="content"
                        className="todo-input"
                        ref={inputRef}
                    />
                    <button className="todo-button" onClick={handleAdd}>add todo</button>
                </div>
            )}

        </div>
    );
}

export default TodoForm;