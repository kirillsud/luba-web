import { apiPlugin, storyblokInit } from '@storyblok/react';
import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { environment } from './environments/environment';
import IndexPage from './app/pages/index-page/index-page';
import { loadStory, StoryblokPage } from './app/pages/storyblok-page';
import Layout from './app/components/layout/layout';
import QuestionAnswer from './app/components/storyblok/question-answer/question-answer';
import Page from './app/components/storyblok/page/page';
import Project from './app/components/storyblok/project/project';
import { galleryImages } from './assets/constants';
import PortfolioPage from './app/pages/portfolio-page/portfolio-page';

storyblokInit({
  accessToken: environment.storyblokAccessToken,
  use: [apiPlugin],
  components: {
    page: Page,
    project: Project,
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
        path: 'portfolio/:slug',
        element: <PortfolioPage portfolio={galleryImages} title='PORTFOLIO' />
      },
      {
        path: 'projects/:slug',
        element: <StoryblokPage />,
        loader: async ({ params: { slug } }) => {
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          return loadStory(`projects/${slug!}`, 'project');
        },
      },
      {
        path: ':slug',
        element: <StoryblokPage />,
        loader: async ({ params: { slug } }) => {
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          return loadStory(slug!, 'page');
        },
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
