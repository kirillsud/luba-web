import { render } from '@testing-library/react';
import Layout from '../components/layout/layout';

// eslint-disable-next-line react/display-name
jest.mock('../main-menu/main-menu', () => () => {
  return <div data-testid="main-menu" />;
});

describe('Layout', () => {
  it('should render successfully', () => {
    const mainMenu = {
      PageItems: { items: [] },
      PortfolioItems: { items: [] },
    };
    const { baseElement } = render(<Layout mainMenu={mainMenu} />);
    expect(baseElement).toBeTruthy();
  });
});
