import { Link, NavLink, useHistory } from 'react-router-dom';
import { useAuth } from '../../features/Auth/Auth.context';
import styles from './Nav.module.css';

export function Nav() {
  const { auth, logout } = useAuth();

  const history = useHistory();

  function handleLogout(e) {
    e.preventDefault();
    logout();
    history.push('/login');
  }

  return (
    <nav className={styles.nav}>
      <Link to="/" className={styles.logo}>
        My Awesome Site
      </Link>
      <ul className={styles['main-menu']}>
        <li>
          <NavLink exact to="/" activeClassName={styles.active}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/communication" activeClassName={styles.active}>
            Communication
          </NavLink>
        </li>
        <li>
          <NavLink to="/todos" activeClassName={styles.active}>
            Todos
          </NavLink>
        </li>

        {!auth?.user && (
          <>
            <li className={styles['push-right']}>
              <NavLink to="/login" activeClassName={styles.active}>
                Login
              </NavLink>
            </li>
            <li>
              <NavLink to="/register" activeClassName={styles.active}>
                Register
              </NavLink>
            </li>
          </>
        )}

        {auth?.user && (
          <>
            <li className={styles['push-right']}>
              Welcome,{' '}
              <NavLink to="/profile" activeClassName={styles.active}>
                {auth.user.email}
              </NavLink>
            </li>
            <li>
              <a href="/" onClick={handleLogout}>
                Logout
              </a>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
