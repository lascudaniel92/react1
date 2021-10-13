import { Link, NavLink } from 'react-router-dom';
import styles from './Nav.module.css';

export function Nav() {
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
      </ul>
    </nav>
  );
}
