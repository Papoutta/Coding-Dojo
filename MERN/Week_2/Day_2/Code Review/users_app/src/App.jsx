import React from 'react'
import {Routes, Route} from 'react-router-dom'
import StudentsList from './components/StudentList'
import StudentDetails from './components/StudentDetails'


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={ <StudentsList/>}/>     
        <Route path='/students/:id' element={ <StudentDetails/>}/>     
      </Routes>
    </>
  )
}

export default App
