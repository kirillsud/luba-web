import { mdiChevronRight, mdiInstagram, mdiLinkedin } from '@mdi/js';
import Icon from '@mdi/react';
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import logoImage from './ginko.jpeg';
import { loadMainMenu } from './main-menu.loader';
import styles from './main-menu.module.css';

export async function MainMenu() {
  const { pages, portfolio } = await loadMainMenu();

  return (
    <>
      <div className={styles['placeholder']}></div>
      <div className={styles['container']}>
        <Link href="/" className={styles['logo']}>
          <Image src={logoImage} alt="logo luba" />
        </Link>

        <ul className={styles['menu']}>
          <li>
            <span className={styles['menu_item']}>
              Portfolio <Icon path={mdiChevronRight} size={1} />
              <ul className={classNames(styles['menu'], styles['drop'])}>
                {portfolio.map((portfolioItem) => (
                  <li key={portfolioItem.slug}>
                    <Link
                      href={`/portfolio/${portfolioItem.slug}`}
                      className={styles['menu_item']}
                    >
                      {portfolioItem.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </span>
          </li>
          {pages.map((pageItem) => (
            <li key={pageItem.slug}>
              <Link href={`/${pageItem.slug}`} className={styles['menu_item']}>
                {pageItem.title}
              </Link>
            </li>
          ))}
        </ul>

        <ul className={styles['contacts']}>
          <li className={styles['contacts_item']}>
            <a
              href="https://www.instagram.com/"
              target="blank"
              title="Instagram"
            >
              <Icon path={mdiInstagram} size={1} />
            </a>
          </li>
          <li className={styles['contacts_item']}>
            <a href="https://www.linkedin.com/" target="blank" title="LinkedIn">
              <Icon path={mdiLinkedin} size={1} />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default MainMenu;
