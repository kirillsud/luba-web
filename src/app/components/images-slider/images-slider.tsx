import { useEffect, useState } from 'react';
import { ArrowForwardIos, ArrowBackIosNew } from '@mui/icons-material';

import styles from './images-slider.module.css';
import Timer from './timer/timer';
import { Seconds } from 'src/app/utils/units';

export interface Slide {
  imageUrl: string;
  slideUrl?: string;
  text?: string;
}

export interface ImagesSliderProps {
  slides: Slide[];
}

export function ImagesSlider({ slides }: ImagesSliderProps) {
  const duration: Seconds = 10 as Seconds;
  const [currentSlide, setCurrentSlide] = useState(0);
  const [play, setPlay] = useState(false);
  const [pause, setPause] = useState(false);

  useEffect(() => setSlide(0), []);

  useEffect(() => {
    setPlay(false);
    // TODO: Find a better way to start the slider,
    //      because this solution depends on the client's render speed.
    //      If the client is slow, the timer will start too early.
    setTimeout(() => setPlay(true), 100);
  }, [currentSlide]);

  function setSlide(slide: number) {
    setCurrentSlide((slides.length + slide) % slides.length);
  }

  function prevSlide() {
    setSlide(currentSlide - 1);
  }

  function nextSlide() {
    setSlide(currentSlide + 1);
  }

  function pauseTimer() {
    setPause(true);
  }

  function resumeTimer() {
    setPause(false);
  }

  const slide = slides[currentSlide];

  const slideContent = (
    <>
      <img src={slide.imageUrl} alt={slide.text} />
      {slide.text ? <span>{slides[currentSlide].text}</span> : null}
    </>
  );

  return (
    <div
      className={styles['container']}
      onMouseOver={pauseTimer}
      onMouseLeave={resumeTimer}
    >
      {slide.slideUrl ? (
        <a className={styles['slide']} href={slide.slideUrl}>
          {slideContent}
        </a>
      ) : (
        <div className={styles['slide']}>{slideContent}</div>
      )}

      <div className={styles['controls']}>
        <button className={styles['prev']} onClick={prevSlide}>
          <ArrowBackIosNew />
        </button>
        <button className={styles['next']} onClick={nextSlide}>
          <ArrowForwardIos />
        </button>
      </div>

      <Timer play={play} pause={pause} duration={duration} finish={nextSlide} />
    </div>
  );
}

export default ImagesSlider;
