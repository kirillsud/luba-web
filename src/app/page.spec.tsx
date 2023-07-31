import { render } from '@testing-library/react';
import IndexPage from './page';

jest.mock('../components/images-slider/image-slider.loader', () => ({
  loadSlides: jest.fn(() => Promise.resolve([])),
}));

// eslint-disable-next-line react/display-name
jest.mock('next/image', () => () => <div />);

describe('IndexPage', () => {
  it('should render successfully', async () => {
    const { baseElement } = render(await IndexPage());
    expect(baseElement).toBeTruthy();
  });
});
