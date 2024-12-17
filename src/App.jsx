import TodoForm from "./components/TodoForm"
import TodoItem from "./components/TodoItem"
import { TodoProvider } from "./context/TodoContext"
import { useState, useEffect } from "react"


function App() {

  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prev) => ([todo, ...prev]))
  }

  const updateTodo = (id, updatedTodo) => {
    setTodos((prev) => (prev.map(
      (prevTodo) => prevTodo.id === id ? { ...prevTodo, ...updatedTodo } : prevTodo
    )))
  }

  const deleteTodo = (id) => {
    setTodos((prev) => (prev.filter((prevTodo) => (prevTodo.id !== id))))
  }

  const toggleComplete = (id) => {
    setTodos((prev) => (prev.map(
      (prevTodo) => (prevTodo.id === id ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo)
    )))
  }

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"))
    if (storedTodos && Array.isArray(storedTodos)) {
      setTodos(storedTodos)
    }else{
      setTodos([]);
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])



  return (
    <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
      <TodoForm />
      {
        todos.map((todo) => (
          <div key={todo.id} className="w-full">
            <TodoItem todo={todo} />
          </div>
        ))
      }
    </TodoProvider>
  )
}
export default App