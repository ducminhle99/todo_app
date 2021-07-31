import React from 'react';
import {RiCloseCircleLine, TiEdit} from "react-icons/all";


function Todo({data, updateTodo, completeTodo, removeTodo}) {

    function handleDelete() {
        removeTodo(data.id)
    }

    function handeleEdit() {
        updateTodo(data.id, data.content)
    }

    function doneTodo() {
        completeTodo(data.id)
    }

    return (
        <div
            className={data.isComplete ? 'todo-row complete' : 'todo-row'}
            key={data.id}
        >
            <div key={data.id} onClick={doneTodo} style={{
                cursor: "pointer",
                whiteSpace: "nowrap",
                maxWidth: "23rem",
                overflow: "hidden",
                textOverflow: "ellipsis" }}>
                {data.content}
            </div>
            <div className='icons'>
                <RiCloseCircleLine
                    onClick={handleDelete}
                    className='delete-icon'
                />
                <TiEdit
                    onClick={handeleEdit}
                    className='edit-icon'
                />
            </div>
        </div>
    );
}

export default Todo;