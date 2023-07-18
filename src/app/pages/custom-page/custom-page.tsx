import {
  ISbStoryData,
  StoryblokComponent,
  storyblokEditable,
} from '@storyblok/react';
import { useLoaderData } from 'react-router-dom';
import { render } from '../../utils/storyblok';
import { PageStoryblok } from '../../../../components.241820';

export function CustomPage() {
  const story = useLoaderData() as ISbStoryData;

  return <StoryblokComponent blok={story.content} />;
}

export function Page({ blok }: { blok: PageStoryblok }) {
  return <main {...storyblokEditable(blok)}>{render(blok.body)}</main>;
}

export default CustomPage;
