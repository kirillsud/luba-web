import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import IndexPage from './app/pages/index-page/index-page';
import ProjectPage from './app/pages/project-page/project-page';
import Layout from './app/components/layout/layout';
import ContactPage from './app/pages/contact-page/contact-page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <IndexPage />,
      },
      {
        path: 'project',
        element: <ProjectPage />,
      },
      {
        path: 'contacts',
        element: <ContactPage />,
      }
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
