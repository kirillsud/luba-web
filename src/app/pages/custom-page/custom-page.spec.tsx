import { render } from '@testing-library/react';

import CustomPage from './custom-page';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';

xdescribe('CustomPage', () => {
  it('should render successfully', () => {
    const story = {};
    const routes = [
      {
        path: '/:slug',
        element: <CustomPage />,
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
