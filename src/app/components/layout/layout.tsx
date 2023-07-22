import { Outlet, useNavigation } from 'react-router-dom';
import MainMenu from '../main-menu/main-menu';

import styles from './layout.module.css';

/* eslint-disable-next-line */
export interface LayoutProps {}

export function Layout(props: LayoutProps) {
  const { state } = useNavigation();

  return (
    <div className={styles['container']}>
      <div className={styles['menu']}>
        <MainMenu />
      </div>
      <div className={styles['page']}>
        {state === 'loading' && <span className={styles['loader']}></span>}
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
