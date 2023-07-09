import ImagesSlider, {
  Slide,
} from '../../components/images-slider/images-slider';
import styles from './index-page.module.css';

/* eslint-disable-next-line */
export interface IndexPageProps {}

export function IndexPage(props: IndexPageProps) {
  const slides: Slide[] = [
    {
      imageUrl: '/assets/1635593722082.jpeg',
      slideUrl: '/portfolio/original-art',
      text: 'Original Art',
    },
    {
      imageUrl: '/assets/1635593867034.jpeg',
      slideUrl: '/portfolio/client-work',
      text: 'Client Work',
    },
  ];

  return (
    <div className={styles['container']}>
      <h1>Welcome to IndexPage!</h1>
      <ImagesSlider slides={slides} />
    </div>
  );
}

export default IndexPage;
