import classNames from 'classnames';
import { Link } from 'react-router-dom';
import styles from './main-menu.module.css';
import logo from '../../../../images/ginko.jpeg';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos';
import { useEffect, useState } from 'react';
import { getStoryblokApi, ISbStoryData } from '@storyblok/react';
import { environment } from '../../../environments/environment';

export interface MenuItem {
  title: string;
  slug: string;
}

function getMenuItemsByType(stories: ISbStoryData[], type: string): MenuItem[] {
  return stories
    .filter((x) => x.content.component === type)
    .map((x) => ({
      title: x.name,
      slug: x.slug,
    }));
}

export function MainMenu() {
  const [portfolios, setPortfolios] = useState<MenuItem[]>([]);
  const [pages, setPages] = useState<MenuItem[]>([]);

  useEffect(() => {
    const storyblokApi = getStoryblokApi();
    storyblokApi
      .getStories({
        version: environment.production ? 'published' : 'draft',
        filter_query: {
          component: {
            in: 'page,portfolio',
          },
        },
        excluding_fields: 'content.body',
        sort_by: 'content.order:asc',
      })
      .then(({ data: { stories } }) => {
        setPages(getMenuItemsByType(stories, 'page'));
        setPortfolios(getMenuItemsByType(stories, 'portfolio'));
      });
  }, []);

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
