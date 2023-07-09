import { Component, useState } from 'react';

import styles from './images-slider.module.css';

export interface Slide {
  imageUrl: string;
  slideUrl?: string;
  text?: string;
}

export interface ImagesSliderProps {
  slides: Slide[];
}

export interface ImagesSliderState {
  currentSlide: number;
}

export class ImagesSlider extends Component<
  ImagesSliderProps,
  ImagesSliderState
> {
  private intervalId?: NodeJS.Timer;

  constructor(props: ImagesSliderProps) {
    super(props);

    this.state = {
      currentSlide: 0,
    };
  }

  override componentDidMount(): void {
    this.intervalId = setInterval(() => {
      this.setSlide(this.state.currentSlide + 1);
    }, 10000);
  }

  override componentWillUnmount(): void {
    clearInterval(this.intervalId);
  }

  override render() {
    const slide = this.props.slides[this.state.currentSlide];

    const slideContent = (
      <>
        <img src={slide.imageUrl} alt={slide.text} />
        {slide.text ? (
          <span>{this.props.slides[this.state.currentSlide].text}</span>
        ) : null}
      </>
    );

    return (
      <div className={styles['container']}>
        {slide.slideUrl ? (
          <a className={styles['slide']} href={slide.slideUrl}>
            {slideContent}
          </a>
        ) : (
          <div className={styles['slide']}>{slideContent}</div>
        )}
        <div className={styles['controls']}>
          <button
            className={styles['prev']}
            onClick={this.setSlide(this.state.currentSlide - 1)}
          >
            Prev
          </button>
          <button
            className={styles['next']}
            onClick={this.setSlide(this.state.currentSlide + 1)}
          >
            Next
          </button>
        </div>
      </div>
    );
  }

  private setSlide(slide: number) {
    return () => {
      this.setState((state) => ({
        ...state,
        currentSlide:
          (this.props.slides.length + slide) % this.props.slides.length,
      }));
    };
  }
}

export default ImagesSlider;
