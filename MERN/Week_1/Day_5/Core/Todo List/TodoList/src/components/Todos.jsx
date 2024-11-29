import React from 'react'

const Todos = ({todos,updateTodos,deleteTodo}) => {

    return (
    <div>
        {todos.map((todo,index)=> 
        <div key={index} style={{display:"flex"}}>
            <h4 style={todo.status?{textDecoration: "line-through"}:{textDecoration: "none"}}>{todo.content}</h4>
            <input type="checkbox" checked={todo.status} onChange={(e)=>updateTodos(index)} />
            <button onClick={()=>deleteTodo(index)}>Delete</button>
        </div>)
        }
    </div>
    )
}

export default Todos