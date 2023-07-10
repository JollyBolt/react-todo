import { useState } from "react"
import "./style.css"
import NewTodoForm from "./components/NewTodoForm"
import TodoList from "./components/TodoList"

export default function App() {
  const [todos,setTodos] = useState([])

  function addTodo(title){
    setTodos(currentTodos =>{
        return [
            ...currentTodos,
            {id:crypto.randomUUID(), title, completed: false},
        ]
    })
  }
  function toggleTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed }
        }
        return todo
      })
    })
  }

  function deleteTodo(id){
    setTodos(currentTodos=>{
      return currentTodos.filter(todo=>todo.id!=id)
    })
  }

  return (
    <div className="container">
      <NewTodoForm onSubmit={addTodo}/>
      <h1 className="header">Todo List</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    </div>
  )
}
