import { render } from '@testing-library/react';

import Layout from './layout';
import { MemoryRouter } from 'react-router-dom';

jest.mock('../main-menu/main-menu', () => () => {
  return <div data-testid="main-menu" />;
});

describe('Layout', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <MemoryRouter>
        <Layout />
      </MemoryRouter>
    );
    expect(baseElement).toBeTruthy();
  });
});
