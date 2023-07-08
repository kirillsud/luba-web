import { Link } from 'react-router-dom';

import styles from './main-menu.module.css';
// import './main-menu.module.css';

import logo from '../../../../images/ginko.jpeg';

import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

/* eslint-disable-next-line */

export interface PortfolioMenuItem {
  title: string;
  url: string;
}
export interface MainMenuProps {
  portfolio: Array<PortfolioMenuItem>;
}

export function MainMenu(props: MainMenuProps) {
  return (
    <>
      <div className={styles['placeholder']}></div>
      <div className={styles['container']}>
        <Link to="/">
          <img className={styles['logo']} src={logo} alt="logo luba" />
        </Link>
        <ul className={styles['menu']}>
          <li className={styles['menu_list']}>
            Portfolio
            <ul className={styles['drop']}>
              {props.portfolio.map((portfolioItem) => (
                <li key={portfolioItem.url}>
                  <Link to={`/${portfolioItem.url}`}>
                    {portfolioItem.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          <li className={styles['menu_list']}>About me</li>
          <li className={styles['menu_list']}>Faq</li>
          <li className={styles['menu_list']}>Contacts</li>
        </ul>

        <ul className={styles['contacts']}>
          <li className={styles['contacts_item']}>
            <a href="https://www.instagram.com/" target="blank">
              <InstagramIcon />
            </a>
          </li>
          <li className={styles['contacts_item']}>
            <a href="https://www.linkedin.com/" target="blank">
              <LinkedInIcon />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default MainMenu;
