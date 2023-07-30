import { render, screen } from '@testing-library/react';
import MainMenu from './main-menu';

// eslint-disable-next-line react/display-name
jest.mock('next/image', () => () => <div />);

describe('MainMenu', () => {
  it('should render successfully', async () => {
    const mainMenu = {
      PageItems: { items: [] },
      PortfolioItems: { items: [] },
    };
    render(<MainMenu items={mainMenu} />);

    expect(await screen.findByText('Portfolio')).toBeTruthy();
  });
});
