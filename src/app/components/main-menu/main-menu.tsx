import { Link } from 'react-router-dom';

import styles from './main-menu.module.css';

/* eslint-disable-next-line */
export interface MainMenuProps {}

export function MainMenu(props: MainMenuProps) {
  return (
    <div className={styles['container']}>
      <ul>
        <li>
          <Link to="/">MainMenu root</Link>
          <Link to="/project">ProjectPage root</Link>
        </li>
      </ul>
    </div>
  );
}

export default MainMenu;
