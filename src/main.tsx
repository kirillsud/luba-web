import { apiPlugin, storyblokInit } from '@storyblok/react';
import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { environment } from './environments/environment';
import IndexPage from './app/pages/index-page/index-page';
import ProjectPage from './app/pages/project-page/project-page';
import CustomPage, { Page } from './app/pages/custom-page/custom-page';
import Layout from './app/components/layout/layout';
import QuestionAnswer from './app/components/question-answer/question-answer';
import { loadStory } from './app/utils/storyblok';

storyblokInit({
  accessToken: environment.storyblokAccessToken,
  use: [apiPlugin],
  components: {
    page: Page,
    'question-answer': QuestionAnswer,
  },
});

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
        path: ':slug',
        loader: async ({ params: { slug } }) => loadStory(slug!, 'page'),
        element: <CustomPage />,
      },
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
