import React, { useState } from 'react'
import {v4 as uuidv4} from "uuid"

const AddStudentForm = ({addStudent}) => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    const submitHandler = (e) => {
        e.preventDefault()
        const newStudent = {id: uuidv4,name, email}
        addStudent(newStudent)
    }

  return (
    <div>AddStudentForm</div>
  )
}

export default AddStudentForm