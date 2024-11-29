import React from 'react'
import { useState } from 'react'



const Form = ({addTodo}) => {
    const [todo,setTodo]=useState({content:"",status:false})
    const SubmitHandler=(e)=>{
        e.preventDefault()
        addTodo(todo)
        setTodo({content:"",status:false})
    }

    return (
        <div>
            <form onSubmit={SubmitHandler}>
                <input type="text" onChange={(e)=> setTodo({...todo ,content:e.target.value})} value={todo.content} />
                <button>Add</button>
            </form>
        </div>
    )
}

export default Form