import { render } from '@testing-library/react';

import Layout from './layout';

jest.mock('../main-menu/main-menu', () => () => {
  return <div data-testid="main-menu" />;
});

jest.mock('react-router-dom', () => {
  const useNavigation = jest.fn(() => ({ state: 'loading' }));
  const Outlet = jest.fn(() => <div data-testid="outlet" />);
  return { useNavigation, Outlet };
});

describe('Layout', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Layout />);
    expect(baseElement).toBeTruthy();
  });
});
