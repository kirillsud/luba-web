import {
  ApolloClient,
  ApolloLink,
  concat,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';
import { draftMode } from 'next/headers';
import { environment } from './environment';

const httpLink = new HttpLink({ uri: 'https://gapi.storyblok.com/v1/api' });

const authMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext(({ headers = {} }) => {
    const draft = draftMode().isEnabled || !environment.production;
    return {
      headers: {
        ...headers,
        token: draft
          ? environment.storyblokAccessTokenDraft
          : environment.storyblokAccessTokenPublished,
        version: draft ? 'draft' : 'published',
      },
    };
  });
  return forward(operation);
});

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: concat(authMiddleware, httpLink),
});
