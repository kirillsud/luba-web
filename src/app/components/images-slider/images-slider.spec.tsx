import { render } from '@testing-library/react';

import ImagesSlider, { Slide } from './images-slider';

describe('ImagesSlider', () => {
  const slides: Slide[] = [
    {
      imageUrl: '/assets/1635593722082.jpeg',
      slideUrl: '/portfolio/original-art',
      text: 'Original Art',
    },
    {
      imageUrl: '/assets/1635593910713.jpeg',
      slideUrl: '/portfolio/client-work',
      text: 'Client Work',
    },
    {
      imageUrl: '/assets/1635593867034.jpeg',
      slideUrl: '/portfolio/rough',
      text: 'Rough',
    },
  ];

  it('should render successfully', () => {
    const { baseElement } = render(<ImagesSlider slides={slides} />);
    expect(baseElement).toBeTruthy();
  });
});
