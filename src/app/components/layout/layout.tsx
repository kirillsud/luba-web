import { Outlet } from 'react-router-dom';
import MainMenu from '../main-menu/main-menu';
import styles from './layout.module.css';

/* eslint-disable-next-line */
export interface LayoutProps {}

const portfolio = [
  { title: 'ORIGINAL ART', url: 'original-art' },
  { title: 'CLIENT WORK', url: 'client-work' },
  { title: 'SKETCH', url: 'sketch' },
];

export function Layout(props: LayoutProps) {
  return (
    <div className={styles['container']}>
      <MainMenu portfolio={portfolio} />
      <div className={styles['page']}>
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
