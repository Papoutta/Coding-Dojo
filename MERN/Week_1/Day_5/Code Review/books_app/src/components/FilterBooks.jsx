import React from 'react'

function FilterBooks({onFilter}) {
  return (
    <div>
        <button className='btn btn-dark btn-outline' onClick={()=>onFilter("all")}>All</button>
        <button className='btn btn-dark btn-outline' onClick={()=>onFilter("read")}>Read</button>
        <button className='btn btn-dark btn-outline' onClick={()=>onFilter("unread")}>Unread</button>
    </div>
  )
}

export default FilterBooks