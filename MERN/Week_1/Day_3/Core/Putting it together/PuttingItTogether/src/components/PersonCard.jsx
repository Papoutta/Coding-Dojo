import React, {useState} from 'react'

const PersonCard = (props) => {
    const [ageDisplay, setAgeDisplay] = useState(props.prop1.age)
    const {prop1} = props
    const PlusOne = () => {
        setAgeDisplay(ageDisplay + 1)
    }
    return (
    <>
        <div>
            <h2>{prop1.lastName}, {prop1.firstName}</h2>
            <p>Age : {ageDisplay}</p>
            <p>Hair Color : {prop1.hairColor}</p>
            <button onClick={PlusOne}>Birthday Button for {prop1.lastName}, {prop1.firstName}</button>
        </div>
    </>
    )
}

export default PersonCard 