import { Outlet } from 'react-router-dom';
import MainMenu, { PortfolioMenuItem } from '../main-menu/main-menu';

import styles from './layout.module.css';

/* eslint-disable-next-line */
export interface LayoutProps {}

const portfolio: PortfolioMenuItem[] = [
  { title: 'Original art', slug: 'original-art' },
  { title: 'Client work', slug: 'client-work' },
  { title: 'Rough', slug: 'rough' },
];

export function Layout(props: LayoutProps) {
  return (
    <div className={styles['container']}>
      <div className={styles['menu']}>
        <MainMenu portfolio={portfolio} />
      </div>
      <div className={styles['page']}>
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
