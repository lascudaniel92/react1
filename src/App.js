import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Parent } from './features/Communication/Parent';
import { Counter } from './features/Counter/Counter';
import { TodoList } from './features/Todos/TodoList';
import { Nav } from './components/Nav/Nav';
import { Auth } from './features/Auth/Auth';
import { AuthContextProvider } from './features/Auth/Auth.context';
import { PrivateRoute } from './components/PrivateRoute';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {
  return (
    <div className="container">
      <AuthContextProvider>
        <Router>
          <Nav />
          <Switch>
            <Route exact path="/" component={Counter} />
            <Route path="/communication" component={Parent} />
            <PrivateRoute path="/todos" component={TodoList} />
            {/* <PrivateRoute path="/todos">
              <TodoList />
            </PrivateRoute> */}
            <Route path="/login" component={Auth} />
            <Route path="/register" component={Auth} />
            <Route path="*" component={() => <h1>404 Page not found</h1>} />
          </Switch>
        </Router>
      </AuthContextProvider>
    </div>
  );
}

export default App;
