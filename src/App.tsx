import './App.css'
import NewTodo from './components/NewTodo'
import TodoList from './components/TodoList'

const App: React.FC = () => {
  const todos = [
    {
      id: 't1',
      text: 'Finish the course',
    }
  ]

  const todoAddHandler = (text: string) => {
    console.log("🚀 ~ file: App.tsx:14 ~ todoAddHandler ~ text:", text)
  }

  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} />
    </div>
  )
}

export default App
