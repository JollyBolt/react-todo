import TodoItem from './TodoItem'

export default function TodoList({todos, toggleTodo, deleteTodo}) {
    
  return (
        <ul className="list">
        {todos.length===0 && "NO TODOS"}
        {todos.map(todos => {
            return (
            <TodoItem
                {...todos}
                key={todos.id}
                toggleTodo={toggleTodo}
                deleteTodo={deleteTodo}
            />
        ) 
        })}

        </ul>
  )
}
