import { useEffect, useState } from 'react';
import { Modal } from '../../Components/Modal/Modal';
import { TodoItem } from './TodoItem';

export function TodoList() {
  const [todos, setTodos] = useState(null);
  const [showModal, setShowModal] = useState(null);
  useEffect(() => {
    fetch('http://localhost:3001/todos?userId=1')
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, []);

  async function handleAddTodo(e) {
    e.preventDefault();
    const todotext = e.target.todotext.value;

    const todo = await fetch('http://localhost:3001/todos', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        userId: 1,
        title: todotext,
        completed: false,
      }),
    }).then((res) => res.json());

    setTodos([...todos, todo]);
    setShowModal(false);
  }

  async function deleteTodo(e) {
    e.preventDefault();

    const deleteTodo = e.target.delete.value;

    await fetch('http://localhost:3001/todos/' + deleteTodo, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
      },
    });

    setTodos(todos.filter((todo) => todo.id !== Number(deleteTodo)));
  }
  function getModalFooter() {
    return (
      <>
        <button className="btn" onClick={() => setShowModal(false)}>
          Cancel
        </button>
        <button className="btn btn-primary" form="addTodoForm">
          Save
        </button>
      </>
    );
  }
  return (
    <div style={{ margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: 1000 }}>
      <h1>Todos</h1>

      <button style={{ fontSize: '2rem' }} onClick={() => setShowModal(true)}>
        Add Todo
      </button>

      <div style={{ marginBottom: 25 }}>
        {todos?.map((one) => (
          <TodoItem key={one.id} todo={one} />
        ))}
      </div>
      <div style={{ width: 600 }}>
        <form style={{ float: 'left' }} onSubmit={handleAddTodo}>
          <input style={{ width: 300 }} type="text" name="todotext"></input>
          <button style={{ color: 'blue', margin: 10, fontSize: '2rem', fontWeight: 700 }}>Add a new todo</button>
        </form>
        <form onSubmit={deleteTodo}>
          <input style={{ width: 300 }} type="text" name="delete"></input>
          <button style={{ color: 'red', margin: 10, fontSize: '2rem', fontWeight: 700 }}>
            Delete an old todo by id
          </button>
        </form>
      </div>
      <Modal title="Test modal" footer={getModalFooter()} show={showModal} onClose={() => setShowModal(false)}>
        <form id="addTodoForm" onSubmit={handleAddTodo}>
          <p>What do you want to add to the list</p>
          <input type="text" name="todotext" style={{ width: '100%' }} />
        </form>
      </Modal>
    </div>
  );
}
