import { ApolloProvider } from '@apollo/client';
import { apiPlugin, storyblokInit } from '@storyblok/react';
import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { environment } from './environments/environment';
import { client } from './app/utils/apollo';
import createRouter from './router';
import AppLoader from './app/components/app-loader/app-loader';
import Page from './app/components/storyblok/page/page';
import Project from './app/components/storyblok/project/project';
import QuestionAnswer from './app/components/storyblok/question-answer/question-answer';
import ContactForm from './app/components/storyblok/contact-form/contact-form';

storyblokInit({
  accessToken: environment.storyblokAccessToken,
  use: [apiPlugin],
  components: {
    page: Page,
    project: Project,
    'question-answer': QuestionAnswer,
    'contact-form': ContactForm,
  },
});

const router = createRouter();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={router} fallbackElement={<AppLoader />} />
    </ApolloProvider>
  </StrictMode>
);
