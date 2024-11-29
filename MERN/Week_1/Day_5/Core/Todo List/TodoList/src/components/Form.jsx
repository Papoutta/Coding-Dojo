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
        <div className='col-4'>
            <form onSubmit={SubmitHandler}>
                <input className='form-control mb-2' type="text" onChange={(e)=> setTodo({...todo ,content:e.target.value})} value={todo.content} />
                <button className='btn btn-primary btn-outline'>Add</button>
            </form>
        </div> 
    )
}

export default Form