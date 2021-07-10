import React from 'react'

export const TodoItem = ({todo,onDelete}) => {
    return (
        <div>
            <h4>{todo.title}</h4>
            <p>{todo.desc}</p>
            <button><div className="btn btn-sm btn-danger" onClick={()=>onDelete(todo)}>Delete</div></button>
        </div>
    )
}
