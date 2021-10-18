// Pure Component
export function TodoItem({ todo, onDelete, onUpdateTodo }) {
  return (
    <p>
      <input
        type="checkbox"
        id={`todo${todo.id}`}
        defaultChecked={todo.completed}
        onChange={() => onUpdateTodo(todo)}
      />
      <label htmlFor={`todo${todo.id}`}>{todo.title}</label>
      <button onClick={() => onDelete(todo.id)}>Del</button>
    </p>
  );
}
