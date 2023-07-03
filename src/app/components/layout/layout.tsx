import { Outlet } from 'react-router-dom';
import MainMenu from '../main-menu/main-menu';
import styles from './layout.module.css';

/* eslint-disable-next-line */
export interface LayoutProps {}

export function Layout(props: LayoutProps) {
  return (
    <div className={styles['container']}>
     <MainMenu/>
     <Outlet/>
    </div>
  );
}

export default Layout;
