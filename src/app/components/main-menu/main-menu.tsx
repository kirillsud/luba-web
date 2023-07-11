import { Link } from 'react-router-dom';

import styles from './main-menu.module.css';

import logo from '../../../../images/ginko.jpeg';

import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export interface PortfolioMenuItem {
  title: string;
  slug: string;
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
            <ul className={styles['menu'] + ' ' + styles['drop']}>
              {props.portfolio.map((portfolioItem) => (
                <li key={portfolioItem.slug} className={styles['menu_list']}>
                  <Link to={`/portfolio/${portfolioItem.slug}`}>
                    {portfolioItem.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          <li className={styles['menu_list']}>
            <Link to="/aboutme">About me</Link>
          </li>
          <li className={styles['menu_list']}>
            <Link to="/faq">Faq</Link>
          </li>
          <li className={styles['menu_list']}>
            <Link to="/contacts">Contacts</Link>
          </li>
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
