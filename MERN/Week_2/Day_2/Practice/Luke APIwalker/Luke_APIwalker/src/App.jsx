import './App.css'
import React from 'react'
import {Routes, Route} from "react-router-dom"
import Form from './components/Form'
import Display from './components/Display'
import Error from './components/Error'

function App() {
  return (
    <div className="container p-3 m-2">
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/:cat/:id" element={<Display/>}/>
        <Route path="/*" element={<Error/>}/>
      </Routes>
    </div>
  )
}

export default App