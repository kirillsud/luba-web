import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import MainMenu from './main-menu';

jest.mock('@storyblok/react', () => ({
  getStoryblokApi: () => ({
    getStories: () => Promise.resolve({ data: { stories: [] } }),
  }),
}));

describe('MainMenu', () => {
  it('should render successfully', async () => {
    render(
      <MemoryRouter>
        <MainMenu />
      </MemoryRouter>
    );

    expect(await screen.findByText('Portfolio')).toBeTruthy();
  });
});
