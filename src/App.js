import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Parent } from './Features/Communication/Parent';
import { Counter } from './Features/Counter/Counter';
import { TodoList } from './Features/Todos/TodoList';
import { Nav } from './Components/Nav/Nav';
import { Auth } from './Features/Auth/Auth';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {
  return (
    <>
      <div className="container">
        <Router>
          <Nav />
          <Switch>
            <Route exact path="/" component={Counter} />
            <Route path="/communication" component={Parent} />
            <Route path="/todos" component={TodoList} />
            <Route path="/register" component={Auth} />
            <Route path="*" component={() => <h1>404 Page not Found</h1>} />
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
