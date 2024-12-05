import React from 'react'

const Display = ({boxes,deletebox}) => {
    return (
        <div className="d-flex flex-wrap gap-2 mt-3">
            {boxes.map((box,index)=>
            <div style={{backgroundColor:box.color,width:box.size +"px",height:box.size +"px"}} key={index}>
                <button className='btn btn-dark' onClick={()=>deletebox(index)}>X</button>
            </div>
        )}
        </div>
    )
}

export default Display