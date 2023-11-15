interface Item {
  id: string
  text: string
}

interface TodoListProps {
  items: Item[]
}

const TodoList: React.FC<TodoListProps> = ({ items }) => {
  return (
    <ul>
      {items.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  )
}

export default TodoList
