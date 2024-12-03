import './App.css'
import {Routes,Route} from "react-router-dom";
import Home from './components/Home';
import Number from './components/Number';
import Colors from './components/Colors';


function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path='/home' element={ <Home/>}/>
          <Route path="/:num" element={<Number/>} />
          <Route path="/:word/:col1/:col2" element={<Colors/>} />
        </Routes>
      </div>
    </>
    )
    
}

export default App