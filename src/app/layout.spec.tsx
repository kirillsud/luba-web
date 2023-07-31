import { render } from '@testing-library/react';
import Layout from './layout';

// eslint-disable-next-line react/display-name
jest.mock('../components/main-menu/main-menu', () => () => {
  return <div data-testid="main-menu" />;
});

describe('Layout', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Layout />);
    expect(baseElement).toBeTruthy();
  });
});
