import Link from 'next/link';
import { loadMainMenu } from './main-menu.loader';
import styles from './main-menu.module.css';

export async function MainMenu() {
  const { pages } = await loadMainMenu();

  return (
    <ul className={styles['menu']}>
      <li>
        <Link href={`/`}>Home</Link>
      </li>
      {pages.map((pageItem) => (
        <li key={pageItem.slug}>
          <Link href={`/${pageItem.slug}`}>{pageItem.title}</Link>
        </li>
      ))}
    </ul>
  );
}

export default MainMenu;
