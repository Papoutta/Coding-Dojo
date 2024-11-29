import { useState } from 'react'
import './App.css'
import Todos from './components/Todos'
import Form from './components/Form'

function App() {
  const [todos, setTodosList] = useState([])

  const addTodo = (todo) => {
    todo.content.length > 0 ?
    setTodosList([...todos, todo]): ""
  }

  const updateTodos = (index) => {
    const todoUpdated = [...todos]
    todoUpdated[index].status = !todos[index].status
    setTodosList(todoUpdated)
  }

  const deleteTodo = (index) => {    
    const filtredTodos = todos.filter((todo, idx) => idx != index)        
    setTodosList(filtredTodos)
  }
  return (
    <>
      <h1>Add Your Todos</h1>
      <Form addTodo={addTodo} />
      <Todos todos={todos} updateTodos={updateTodos} deleteTodo={deleteTodo} />
    </>
  )
}

export default App