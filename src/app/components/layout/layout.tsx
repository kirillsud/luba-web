import { Outlet } from 'react-router-dom';
import MainMenu from '../main-menu/main-menu';
import styles from './layout.module.css';

/* eslint-disable-next-line */
export interface LayoutProps {}

const portfolio = [
  { title: 'Scetches1', url: 'scetches1' },
  { title: 'Scetches2', url: 'scetches2' },
  { title: 'Scetches3', url: 'scetches3' },
];

export function Layout(props: LayoutProps) {
  return (
    <div className={styles['container']}>
      <MainMenu  portfolio={portfolio}/>
      <div className={styles['page']}>
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
