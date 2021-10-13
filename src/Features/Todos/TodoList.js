import { useState, useEffect } from 'react';
import { Modal } from '../../Components/Modal/Modal';
import { TodoItem } from './TodoItem';

export function TodoList() {
  const [todos, setTodos] = useState(null);
  const [showModal, setShowModal] = useState(null);
  const accessToken = localStorage.accessToken;
  const userId = localStorage.userId;

  useEffect(() => {
    return fetch(`http://localhost:3001/todos?userId=${userId}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, [accessToken, userId]);

  // getData();

  async function handleAddTodo(e) {
    e.preventDefault();

    const todotext = e.target.todotext.value;

    const todo = await fetch('http://localhost:3001/todos', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        userId: userId,
        title: todotext,
        completed: false,
      }),
    }).then((res) => res.json());

    setTodos([...todos, todo]);
    setShowModal(false);
    e.target.reset();
  }

  async function deleteTodo(e) {
    e.preventDefault();

    const deleteTodo = e.target.delete.value;

    await fetch('http://localhost:3001/todos/' + deleteTodo, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    });

    setTodos(todos.filter((todo) => todo.id !== Number(deleteTodo)));
    e.target.reset();
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
    <div
      style={{
        margin: '0 auto',
        // display: 'flex',
        // flexDirection: 'column',
        // alignItems: 'flex-start',
        maxWidth: '100rem',
        minWidth: '30rem',
      }}
    >
      <div>
        <h1 style={{ fontSize: '4rem', margin: 0 }}>Todos</h1>

        <button style={{ margin: '10px 0px 10px 0px', fontSize: '2rem' }} onClick={() => setShowModal(true)}>
          Add Todo
        </button>
      </div>
      <div style={{ marginBottom: 25 }}>
        {Array.isArray(todos) && todos.map((one) => <TodoItem key={one.id} todo={one} />)}
      </div>
      <div style={{ maxWidth: 1000, display: 'flex', flexDirection: 'column' }}>
        <form autoComplete="off" style={{}} onSubmit={handleAddTodo}>
          <input style={{ width: 280, fontSize: '2rem' }} type="text" name="todotext"></input>
          <button style={{ color: 'green', margin: '1rem', fontSize: '2rem', fontWeight: 700 }}>Add a new Todo</button>
        </form>
        <form autoComplete="off" style={{}} onSubmit={deleteTodo}>
          <input style={{ width: 280, fontSize: '2rem' }} type="text" name="delete"></input>
          <button style={{ color: 'red', margin: '1rem', fontSize: '2rem', fontWeight: 700 }}>Delete Todo by id</button>
        </form>
      </div>
      <Modal title="Test modal" footer={getModalFooter()} show={showModal} onClose={() => setShowModal(false)}>
        <form autoComplete="off" id="addTodoForm" onSubmit={handleAddTodo}>
          <p>What do you want to add to the list?</p>
          <input type="text" name="todotext" style={{ width: '100%' }} />
        </form>
      </Modal>
    </div>
  );
}
