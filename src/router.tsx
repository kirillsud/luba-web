import { createBrowserRouter } from 'react-router-dom';
import Layout from './app/components/layout/layout';
import loadMainMenu from './app/components/main-menu/main-menu.loader';
import IndexPage from './app/pages/index-page/index-page';
import { loadStory, StoryblokPage } from './app/pages/storyblok-page';

export default function createRouter() {
  return createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      loader: async () => ({
        mainMenu: await loadMainMenu(),
      }),
      children: [
        {
          index: true,
          element: <IndexPage />,
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
}
