import './TodoList.css'

interface TodoListProps {
  items        : Todo[]
  onDeleteTodo : (id: string) => void
}

const TodoList: React.FC<TodoListProps> = ({ items, onDeleteTodo }) => {
  return (
    <ul>
      {items.map((todo) => (
        <li key={todo.id}>
          <span>{todo.text}</span>
          <button onClick={() => onDeleteTodo(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  )
}

export default TodoList
