import { useState } from 'react';
export function TodoItem({ todo }) {
  const [isShown, setIsShown] = useState(false);

  function handleTodoClick(e) {
    const isTodoChecked = e.target.checked;

    fetch('http://localhost:3001/todos/' + todo.id, {
      method: 'PATCH',
      body: JSON.stringify({
        completed: isTodoChecked,
      }),
      headers: {
        'Content-type': 'application/json',
      },
    });
  }

  return (
    <p style={{ fontSize: 25, margin: 8 }} key={todo.id}>
      <input onClick={handleTodoClick} type="checkbox" id={`todo${todo.id}`} defaultChecked={todo.completed} />
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
        </div>
      )}
    </p>
  );
}
