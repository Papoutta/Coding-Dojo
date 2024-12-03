import React from 'react'
import { useParams } from 'react-router-dom'

const Number = () => {
    const {num} = useParams()
    return (
      isNaN(num) ? (   
        <h1>The Word is : {num}</h1>
      ) : (
        <h1>The Number is : {num}</h1>
      )
    );
}

export default Number