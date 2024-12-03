import React from 'react'
import { useParams } from 'react-router-dom'

const Colors = () => {
    const {word,col1,col2} = useParams()
    return (
        <div>
            <h1 style={{backgroundColor:col2, color:col1}}> The Word is :{word} </h1>
        </div>
    )
}

export default Colors