import { render } from '@testing-library/react';

import StoryblokPage from './storyblok-page';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';

xdescribe('StoryblokPage', () => {
  it('should render successfully', () => {
    const story = {};
    const routes = [
      {
        path: '/:slug',
        element: <StoryblokPage />,
        loader: () => story,
      },
    ];
    const router = createMemoryRouter(routes, {
      initialEntries: ['/', '/test'],
      initialIndex: 1,
    });

    const { baseElement } = render(<RouterProvider router={router} />);
    expect(baseElement).toBeTruthy();
  });
});
