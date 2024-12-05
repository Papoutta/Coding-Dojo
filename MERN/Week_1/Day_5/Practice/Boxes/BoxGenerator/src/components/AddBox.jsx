import React, { useState } from 'react'

const AddBox = ({addnewbox}) => {

    const [color,setColor]=useState('')
    const [size,setSize]=useState(0)

    const submitHandler=(e)=>{
        e.preventDefault();
        const newbox={
            color,
            size
        }
        addnewbox(newbox)
        setColor("");
        setSize(0);
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='container d-flex flex-column align-items-center gap-3 col-6'>
                <h1>Box generator</h1>
                <label htmlFor="color">Color</label>
                <input className='form-control' type="text" onChange={(e)=>setColor(e.target.value)} value={color} />
                <label htmlFor="Size">Size</label>
                <input className='form-control' type="number" onChange={(e)=>setSize(e.target.value)} value={size} />
                <button className='btn btn-primary'>Add box</button>
            </div>
            
        </form>
    )
}

export default AddBox