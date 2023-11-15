import { useRef } from 'react'

interface NewTodoProps {
  onAddTodo: (todoText: string) => void
}

const NewTodo: React.FC<NewTodoProps> = ({ onAddTodo }) => {
  const textInputRef = useRef<HTMLInputElement>(null)

  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault()
    const enteredText = textInputRef.current!.value
    onAddTodo(enteredText)
  }

  return (
    <form onSubmit={todoSubmitHandler}>
      <div>
        <label htmlFor="todo-text">Todo Text</label>
        <input
          ref={textInputRef}
          type="text"
          id="todo-text"
        />
      </div>
      <button type="submit">Add Todo</button>
    </form>
  )
}

export default NewTodo
