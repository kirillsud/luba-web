import {
  loadSlides,
  Slide,
} from '../components/images-slider/image-slider.loader';
import ImagesSlider from '../components/images-slider/images-slider';
import styles from './page.module.css';

export default async function IndexPage() {
  const slides: Slide[] = await loadSlides();

  return (
    <div className={styles['container']}>
      <ImagesSlider slides={slides} />
    </div>
  );
}
