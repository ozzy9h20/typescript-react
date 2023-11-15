import { useRef } from 'react'

const NewTodo: React.FC = () => {
  const textInputRef = useRef<HTMLInputElement>(null)

  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault()
    const enteredText = textInputRef.current!.value
    console.log("🚀 ~ file: NewTodo.tsx:9 ~ todoSubmitHandler ~ enteredText:", enteredText)
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
