import { gql } from '@apollo/client';
// eslint-disable-next-line no-restricted-imports
import type { ISbStoryData } from '@storyblok/react';
import { client } from '../../utils/apollo';
import {
  PageStoryblok,
  PortfolioStoryblok,
} from '../../utils/components.storyblok';

export interface MainMenuData {
  pages: MenuItem[];
  portfolio: MenuItem[];
}

export interface MenuItem {
  title: string;
  slug: string;
}

interface MainMenuResponse {
  PageItems: { items: ISbStoryData<PageStoryblok>[] };
  PortfolioItems: { items: ISbStoryData<PortfolioStoryblok>[] };
}

const query = gql`
  query {
    PageItems(sort_by: "position:asc") {
      items {
        slug
        name
      }
    }
    PortfolioItems(sort_by: "position:asc") {
      items {
        slug
        name
      }
    }
  }
`;

function toMenuItems(stories: ISbStoryData[]): MenuItem[] {
  return [...stories].map((x) => ({
    title: x.name,
    slug: x.slug,
  }));
}

export async function loadMainMenu() {
  const response = await client.query<MainMenuResponse>({ query });

  if (response.error) {
    throw response.error;
  }

  return {
    pages: toMenuItems(response.data.PageItems.items),
    portfolio: toMenuItems(response.data.PortfolioItems.items),
  };
}
