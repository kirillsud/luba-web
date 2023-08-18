'use client';

import classNames from 'classnames';
import Image from 'next/image';
import { ReactElement, useCallback, useEffect, useState } from 'react';
import { Seconds } from 'src/utils/units';
import { Slide } from './image-slider.loader';
import styles from './images-slider.module.css';
import Timer from './timer/timer';

export interface ImagesSliderProps {
  slides: Slide[];
  menuId: string;
  activeClass?: string;
}

interface SlideState {
  index: number;
  element: ReactElement | null;
}

export function ImagesSlider({
  slides,
  menuId,
  activeClass = 'active',
}: ImagesSliderProps) {
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

        const previousIndex = current ? current.index : slides.length - 1;

        return {
          previous: {
            index: previousIndex,
            element: renderSlide(slides[previousIndex], styles['previous']),
          },
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

  useEffect(() => {
    const menu = document.getElementById(menuId);

    const previous = slides[visibleSlides.previous?.index ?? -1];
    const previousItem = menu?.querySelector(`a[href="${previous?.slideUrl}"]`);
    previousItem?.classList.remove(activeClass);

    const current = slides[visibleSlides.current?.index ?? -1];
    const currentItem = menu?.querySelector(`a[href="${current?.slideUrl}"]`);
    currentItem?.classList.add(activeClass);
  }, [slides, menuId, activeClass, visibleSlides]);

  return (
    <div
      className={classNames(styles['container'], {
        [styles['play']]: play,
      })}
    >
      <div
        onMouseOver={() => setPause(true)}
        onMouseLeave={() => setPause(false)}
      >
        {visibleSlides.current?.element}
        {visibleSlides.previous?.element}
      </div>

      <div className={styles['controls']}>
        <button className={styles['prev']} onClick={() => moveSlide(-1)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        <button className={styles['next']} onClick={() => moveSlide(1)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
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
