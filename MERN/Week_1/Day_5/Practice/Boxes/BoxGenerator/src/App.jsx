import { useState } from 'react'
import './App.css'
import AddBox from './components/AddBox'
import Display from './components/Display'

function App() {
  const [boxes, setBoxes] = useState([])
  
  const addnewbox=(obj)=>{
    setBoxes([...boxes,obj])
  }
  const deletebox=(index)=>{
    const filterboxes=boxes.filter((box,i)=>i != index)
    setBoxes(filterboxes)
  }
  return (
    <div>

      <AddBox addnewbox={addnewbox}/>
      <Display boxes={boxes } deletebox={deletebox}/>
    </div>
  )
}

export default App