import { useEffect, useState } from 'react';
import { TodoItem } from './TodoItem';

export function TodoList() {
  const [todos, setTodos] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3001/todos?userId=1')
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    const title = e.target.title.value;

    fetch('http://localhost:3001/todos', {
      method: 'POST',
      body: JSON.stringify({
        completed: false,
        userId: 1,
        title: title,
      }),
      headers: {
        'Content-type': 'application/json',
      },
    }).then(window.location.reload(false));
  }

  function deleteTodo(e) {
    e.preventDefault();

    const deleteTodo = e.target.delete.value;

    fetch('http://localhost:3001/todos/' + deleteTodo, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
      },
    }).then(window.location.reload(false));
  }

  return (
    <div>
      <h1>Todos</h1>
      <div style={{ marginBottom: 25 }}>
        {todos?.map((one) => (
          <TodoItem key={one.id} todo={one} />
        ))}
      </div>

      <form onSubmit={handleSubmit} style={{ float: 'left' }}>
        <input type="text" name="title"></input>
        <button style={{ color: 'blue', margin: 10, fontSize: 15, fontWeight: 700 }}>Add a new todo</button>
      </form>
      <form onSubmit={deleteTodo}>
        <input type="text" name="delete"></input>
        <button style={{ color: 'red', margin: 10, fontSize: 15, fontWeight: 700 }}>Delete an old todo by id</button>
      </form>
    </div>
  );
}
