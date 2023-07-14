import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import MainMenu from './main-menu';

describe('MainMenu', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <MemoryRouter>
        <MainMenu portfolio={[]} />
      </MemoryRouter>
    );
    expect(baseElement).toBeTruthy();
  });
});
