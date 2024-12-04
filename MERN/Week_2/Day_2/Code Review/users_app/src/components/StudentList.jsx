import {useState, useEffect} from 'react'
import AddStudentForm from './AddStudentForm'

const StudentList = () => {

    const [students, setStudents] = useState([])

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res)=>{
            setStudents(res.data)
        })
        .catch(err=>{
            console.log(err);
        })
    },[])
  
  const addStudent =(newUser) => {
    setStudents({...students,newUser})
  }
  
  
    return (
    <div>
        <AddStudentForm addStudent={addStudent}/>
        {students.map(students)=>((
            <></>
        ))}
    </div>
  )
}

export default StudentList