import classNames from 'classnames';
import { Link } from 'react-router-dom';
import styles from './main-menu.module.css';
import logo from '../../../../images/ginko.jpeg';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos';

export interface PortfolioMenuItem {
  title: string;
  slug: string;
}

export interface MainMenuProps {
  portfolio: Array<PortfolioMenuItem>;
}

export function MainMenu({ portfolio }: MainMenuProps) {
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
                {portfolio.map((portfolioItem) => (
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
          <li>
            <Link to="/aboutme" className={styles['menu_item']}>
              About me
            </Link>
          </li>
          <li>
            <Link to="/faq" className={styles['menu_item']}>
              Faq
            </Link>
          </li>
          <li>
            <Link to="/contacts" className={styles['menu_item']}>
              Contacts
            </Link>
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
