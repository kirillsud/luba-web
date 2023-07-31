import {
  ApolloClient,
  ApolloLink,
  concat,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';
import { draftMode } from 'next/headers';
import { environment } from '../remove/environments/environment';

const httpLink = new HttpLink({ uri: 'https://gapi.storyblok.com/v1/api' });

const authMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext(({ headers = {} }) => {
    return {
      headers: {
        ...headers,
        token: draftMode().isEnabled
          ? environment.storyblokAccessTokenDraft
          : environment.storyblokAccessToken,
        version:
          draftMode().isEnabled || !environment.production
            ? 'draft'
            : 'published',
      },
    };
  });
  return forward(operation);
});

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: concat(authMiddleware, httpLink),
});
