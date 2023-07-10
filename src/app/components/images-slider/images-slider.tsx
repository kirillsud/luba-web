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
  const [prevSlide, setPrevSlide] = useState(0);
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
    setPrevSlide(currentSlide);
    setCurrentSlide((slides.length + slide) % slides.length);
  }

  function goPrevSlide() {
    setSlide(currentSlide - 1);
  }

  function goNextSlide() {
    setSlide(currentSlide + 1);
  }

  function pauseTimer() {
    setPause(true);
  }

  function resumeTimer() {
    setPause(false);
  }

  function renderSlide(slideIndex: number, className = '') {
    const slide = slides[slideIndex];
    if (!slide) {
      return null;
    }

    const slideContent = (
      <>
        <img src={slide.imageUrl} alt={slide.text} />
        {slide.text ? <span>{slide.text}</span> : null}
      </>
    );

    className = `${styles['slide']} ${className}`;

    return slide.slideUrl ? (
      <a className={className} href={slide.slideUrl}>
        {slideContent}
      </a>
    ) : (
      <div className={className}>{slideContent}</div>
    );
  }

  const slideElement = renderSlide(currentSlide);
  const prevSlideElement = renderSlide(prevSlide, styles['previous']);

  return (
    <div
      className={`${styles['container']} ${play ? styles['play'] : ''}`}
      onMouseOver={pauseTimer}
      onMouseLeave={resumeTimer}
    >
      {slideElement}
      {prevSlideElement}

      <div className={styles['controls']}>
        <button className={styles['prev']} onClick={goPrevSlide}>
          <ArrowBackIosNew />
        </button>
        <button className={styles['next']} onClick={goNextSlide}>
          <ArrowForwardIos />
        </button>
      </div>

      <Timer
        play={play}
        pause={pause}
        duration={duration}
        finish={goNextSlide}
      />
    </div>
  );
}

export default ImagesSlider;
