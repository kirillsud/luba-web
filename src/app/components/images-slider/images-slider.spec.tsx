import { render } from '@testing-library/react';

import ImagesSlider from './images-slider';

describe('ImagesSlider', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImagesSlider />);
    expect(baseElement).toBeTruthy();
  });
});
