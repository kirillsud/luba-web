'use client';

import { mdiChevronLeft, mdiChevronRight } from '@mdi/js';
import Icon from '@mdi/react';
import Image from 'next/image';
import { ReactElement, useCallback, useEffect, useState } from 'react';
import { Seconds } from 'src/utils/units';
import styles from './images-slider.module.css';
import Timer from './timer/timer';

export interface Slide {
  imageUrl: string;
  slideUrl?: string;
  text?: string;
}

export interface ImagesSliderProps {
  slides: Slide[];
}

interface SlideState {
  index: number;
  element: ReactElement | null;
}

export function ImagesSlider({ slides }: ImagesSliderProps) {
  const duration = 10 as Seconds;

  const [visibleSlides, setVisibleSlides] = useState<{
    current?: SlideState;
    previous?: SlideState;
  }>({});

  const [play, setPlay] = useState(false);
  const [pause, setPause] = useState(false);

  const moveSlide = useCallback(
    (offset: number) => {
      const slidesLen = slides.length;

      setVisibleSlides(({ current }) => {
        const newIndex =
          (slidesLen + (current?.index ?? 0) + offset) % slidesLen;

        return {
          previous:
            current !== undefined
              ? {
                  ...current,
                  element: renderSlide(
                    slides[current.index],
                    styles['previous']
                  ),
                }
              : undefined,
          current: {
            index: newIndex,
            element: renderSlide(slides[newIndex]),
          },
        };
      });
      setPlay(false);
      setTimeout(() => setPlay(true), 1);
    },
    [slides]
  );

  useEffect(() => moveSlide(0), [moveSlide]);

  return (
    <div
      className={`${styles['container']} ${play ? styles['play'] : ''}`}
      onMouseOver={() => setPause(true)}
      onMouseLeave={() => setPause(false)}
    >
      {visibleSlides.current?.element}
      {visibleSlides.previous?.element}

      <div className={styles['controls']}>
        <button className={styles['prev']} onClick={() => moveSlide(-1)}>
          <Icon path={mdiChevronLeft} size={2} />
        </button>
        <button className={styles['next']} onClick={() => moveSlide(1)}>
          <Icon path={mdiChevronRight} size={2} />
        </button>
      </div>

      <Timer
        play={play}
        pause={pause}
        duration={duration}
        finish={() => moveSlide(1)}
      />
    </div>
  );
}

function renderSlide(slide: Slide | undefined, ...classNames: string[]) {
  if (!slide) {
    return null;
  }

  const slideContent = (
    <>
      <Image src={slide.imageUrl} alt={slide.text ?? ''} fill={true} />
      {slide.text ? <span>{slide.text}</span> : null}
    </>
  );

  classNames.unshift(styles['slide']);
  const className = classNames.filter(Boolean).join(' ');

  return slide.slideUrl ? (
    <a className={className} href={slide.slideUrl}>
      {slideContent}
    </a>
  ) : (
    <div className={className}>{slideContent}</div>
  );
}

export default ImagesSlider;
