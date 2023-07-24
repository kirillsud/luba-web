import { render, screen } from '@testing-library/react';
import MainMenu from './main-menu';

jest.mock('react-router-dom', () => {
  return {
    useLoaderData: jest.fn(() => ({
      mainMenu: {
        PageItems: { items: [] },
        PortfolioItems: { items: [] },
      },
    })),
    Link: () => <div />,
  };
});

describe('MainMenu', () => {
  it('should render successfully', async () => {
    render(<MainMenu />);

    expect(await screen.findByText('Portfolio')).toBeTruthy();
  });
});
