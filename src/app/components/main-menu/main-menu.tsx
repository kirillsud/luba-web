import { gql, useQuery } from '@apollo/client';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos';
import { getStoryblokApi, ISbStoryData } from '@storyblok/react';
import { useEffect, useState } from 'react';
import classNames from 'classnames';
import { Link, useLoaderData } from 'react-router-dom';
import styles from './main-menu.module.css';
import logo from '../../../../images/ginko.jpeg';
import loadMainMenu from './main-menu.loader';
import { Simulate } from 'react-dom/test-utils';
import error = Simulate.error;

export interface MenuItem {
  title: string;
  slug: string;
}

function toMenuItems(stories: ISbStoryData[]): MenuItem[] {
  return [...stories]
    .sort((a, b) => a.content.order - b.content.order)
    .map((x) => ({
      title: x.name,
      slug: x.slug,
    }));
}

export function MainMenu() {
  const { mainMenu } = useLoaderData() as {
    mainMenu: Awaited<ReturnType<typeof loadMainMenu>>;
  };
  const [portfolios, setPortfolios] = useState<MenuItem[]>([]);
  const [pages, setPages] = useState<MenuItem[]>([]);

  useEffect(() => {
    if (mainMenu) {
      setPages(toMenuItems(mainMenu.PageItems.items));
      setPortfolios(toMenuItems(mainMenu.PortfolioItems.items));
    }
  }, [mainMenu]);

  return (
    <>
      <div className={styles['placeholder']}></div>
      <div className={styles['container']}>
        <Link to="/" className={styles['logo']}>
          <img src={logo} alt="logo luba" />
        </Link>

        <ul className={styles['menu']}>
          <li>
            <span className={styles['menu_item']}>
              Portfolio <ArrowForwardIos />
              <ul className={classNames(styles['menu'], styles['drop'])}>
                {portfolios.map((portfolioItem) => (
                  <li key={portfolioItem.slug}>
                    <Link
                      to={`/portfolio/${portfolioItem.slug}`}
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
              <Link to={`/${pageItem.slug}`} className={styles['menu_item']}>
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
              <InstagramIcon />
            </a>
          </li>
          <li className={styles['contacts_item']}>
            <a href="https://www.linkedin.com/" target="blank" title="LinkedIn">
              <LinkedInIcon />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default MainMenu;
