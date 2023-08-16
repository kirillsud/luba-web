import Link from 'next/link';
import {
  loadSlides,
  Slide,
} from '../components/images-slider/image-slider.loader';
import ImagesSlider from '../components/images-slider/images-slider';
import { loadMainMenu } from '../components/main-menu/main-menu.loader';
import styles from './page.module.css';

export default async function IndexPage() {
  const slides: Slide[] = await loadSlides();
  const mainMenu = await loadMainMenu();
  const menuId = 'portfolio-menu';

  return (
    <>
      <h2>
        Concept art<span className={styles['primary-color']}>.</span>
        <br />
        Illustration
      </h2>

      <article className={styles['container']}>
        <ul className={styles['menu']} id={menuId}>
          {mainMenu.portfolio.map((item) => (
            <li key={item.slug}>
              <Link href={`/portfolio/${item.slug}`}>{item.title}</Link>
            </li>
          ))}
        </ul>

        <div className={styles['slider']}>
          <ImagesSlider
            slides={slides}
            menuId={menuId}
            activeClass={styles['active']}
          />
        </div>
      </article>
    </>
  );
}
