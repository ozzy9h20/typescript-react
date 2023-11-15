import { useState } from 'react'
import './App.css'
import NewTodo from './components/NewTodo'
import TodoList from './components/TodoList'

const App: React.FC = () => {
  /* ========================================== States ========================================== */
  const [todos, setTodos] = useState<Todo[]>([])

  /* ========================================= Functions ======================================== */
  const todoAddHandler = (text: string) => {
    const id = Math.random().toString()

    setTodos((todos) => [
      ...todos,
      { id, text }
    ])
  }

  /* ========================================== Output ========================================== */
  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} />
    </div>
  )
}

export default App
