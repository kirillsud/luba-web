import { gql } from '@apollo/client';
import { client } from '../../utils/apollo';
import {
  PageStoryblok,
  PortfolioStoryblok,
} from '../../utils/components.storyblok';
import { ISbStoryData } from '@storyblok/react';

const query = gql`
  query {
    PageItems(sort_by: "content.order:asc") {
      items {
        slug
        content {
          order
        }
        name
      }
    }
    PortfolioItems(sort_by: "content.order:asc") {
      items {
        slug
        content {
          order
        }
        name
      }
    }
  }
`;

export default function loadMainMenu() {
  return client
    .query<{
      PageItems: { items: ISbStoryData<PageStoryblok>[] };
      PortfolioItems: { items: ISbStoryData<PortfolioStoryblok>[] };
    }>({ query })
    .then(({ data, error }) => {
      if (error) {
        return Promise.reject(error);
      }

      return data;
    });
}
