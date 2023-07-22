import { StoryblokComponent, storyblokEditable } from '@storyblok/react';
import { useStoryblokFromRoute } from './storyblok-page.hook';

export function StoryblokPage() {
  const story = useStoryblokFromRoute();

  return (
    <div {...storyblokEditable(story.content)}>
      <h1>{story.name}</h1>
      <StoryblokComponent blok={story.content} />
    </div>
  );
}

export default StoryblokPage;
