import { useState } from 'react';
export function TodoItem({ todo }) {
  const [isShown, setIsShown] = useState(false);

  const accessToken = localStorage.accessToken;

  async function changeTodoStatus(e) {
    await fetch(`http://localhost:3001/todos/${todo.id}`, {
      method: 'PATCH',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        completed: !todo.completed,
      }),
    });
    todo.completed = !todo.completed;
  }

  return (
    <div style={{ fontSize: '3rem' }} key={todo.id}>
      <input
        style={{ margin: '0px 3px 0px 0px' }}
        autoComplete="off"
        onClick={changeTodoStatus}
        type="checkbox"
        id={`todo${todo.id}`}
        defaultChecked={todo.completed}
      />
      <label onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)} htmlFor={`todo${todo.id}`}>
        {todo.title}
      </label>
      {isShown && (
        <div
          style={{
            position: 'absolute',
            float: 'left',
            color: 'white',
            fontSize: 25,
            padding: 5,
            backgroundColor: 'black',
          }}
        >
          ID:{todo.id}
          <button style={{}}>Delete</button>
        </div>
      )}
    </div>
  );
}
