import {
  ApolloClient,
  ApolloLink,
  concat,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';
import { environment } from '../../environments/environment';

const httpLink = new HttpLink({ uri: 'https://gapi.storyblok.com/v1/api' });

const authMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      token: environment.storyblokAccessToken,
      version: environment.production ? 'published' : 'draft',
    },
  }));
  return forward(operation);
});

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: concat(authMiddleware, httpLink),
});
