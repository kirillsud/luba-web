import { render, screen } from '@testing-library/react';
import MainMenu from './main-menu';

jest.mock('../../utils/apollo', () => ({
  client: {
    query: jest.fn(() =>
      Promise.resolve({
        data: {
          PageItems: { items: [] },
          PortfolioItems: { items: [] },
        },
      })
    ),
  },
}));

// eslint-disable-next-line react/display-name
jest.mock('next/image', () => () => <div />);

describe('MainMenu', () => {
  it('should render successfully', async () => {
    render(await MainMenu());
    expect(await screen.findByText('Portfolio')).toBeTruthy();
  });
});
