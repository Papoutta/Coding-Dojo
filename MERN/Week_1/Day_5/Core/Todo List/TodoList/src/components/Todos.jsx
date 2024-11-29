import React from 'react'

const Todos = ({todos,updateTodos,deleteTodo}) => {

    return (
    <div className='mt-5'>
        <h1>Todos :</h1>
        {todos.map((todo,index)=> 
        <div className='mb-3 mt-4' key={index} style={{display:"flex", gap:"10px"}}>
            <h4 style={todo.status?{textDecoration: "line-through"}:{textDecoration: "none"}}>{todo.content}</h4>
            <input type="checkbox" checked={todo.status} onChange={(e)=>updateTodos(index)} />
            <button className='btn btn-dark' onClick={()=>deleteTodo(index)}>Delete</button>
        </div>)
        }
    </div>
    )
}

export default Todos