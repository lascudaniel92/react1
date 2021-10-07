import { Parent } from './Features/Communication/Parent';
import { Counter } from './Features/Counter/Counter';
import { TodoList } from './Features/Todos/TodoList';
import './App.css';

function App() {
  return (
    <>
      <TodoList />
      <Parent />
      <Counter />
    </>
  );
}

export default App;
