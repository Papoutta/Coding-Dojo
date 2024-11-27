import React from 'react'

const PersonCard = (props) => {
    const {prop1} = props
    return (
    <>
        <div>
            <h2>{prop1.lastName}, {prop1.firstName}</h2>
            <p>Age : {prop1.age}</p>
            <p>Hair Color : {prop1.hairColor}</p>
        </div>
    </>
    )
}

export default PersonCard 