import { gql } from '@apollo/client';
// eslint-disable-next-line no-restricted-imports
import type { ISbStoryData } from '@storyblok/react';
import { client } from '../../utils/apollo';
import {
  PortfolioStoryblok,
  ProjectStoryblok,
} from '../../utils/components.storyblok';

export interface Slide {
  imageUrl: string;
  slideUrl?: string;
  text?: string;
}

const query = gql`
  query {
    PortfolioItems(sort_by: "position:asc") {
      items {
        slug
        name
        content {
          projects(fields: "image") {
            content
          }
        }
      }
    }
  }
`;

function isProject(project: any): project is ISbStoryData<ProjectStoryblok> {
  return typeof project === 'object';
}

export async function loadSlides() {
  const response = await client.query({ query });

  if (response.error) {
    throw response.error;
  }

  const slides: Slide[] = response.data.PortfolioItems.items.map(
    (item: ISbStoryData<PortfolioStoryblok>) => {
      const projects = item.content.projects?.filter(
        isProject
      ) as ISbStoryData<ProjectStoryblok>[];

      return {
        text: item.name,
        slideUrl: item.slug,
        imageUrl: projects[0]?.content?.image.filename,
      };
    }
  );

  return slides;
}
