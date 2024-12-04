import React, { useEffect, useState } from 'react'
import {Link, useParams} from react-router-dom

const StudentDetails = () => {
    const {id} = useParams()
    const [student, setStudent] = useState(null)

    useEffect(()=>{
        axios.get(`/${id}`)
        .then(res => setStudent(res.data))
        .catch(err => console.log("Error fetching student")
        )
    },[id]);


  return (
    <div style={{width : "50%"}}>StudentDetails</div>
  )
}

export default StudentDetails