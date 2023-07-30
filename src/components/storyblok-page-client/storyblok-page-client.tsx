'use client';

// eslint-disable-next-line no-restricted-imports
import {
  ISbStoryData,
  registerStoryblokBridge,
  StoryblokComponent,
  storyblokEditable,
} from '@storyblok/react';
import { useEffect, useState } from 'react';

/**
 * Loads a story from the router `loader` data and
 * marks it as editable in Storyblok administrator panel.
 */
export function useStoryblok(originStory: ISbStoryData) {
  const [story, setStory] = useState<ISbStoryData>(originStory);

  useEffect(() => {
    if (!originStory.id) {
      return;
    }

    setStory(originStory);

    const isBridgeEnable = window?.storyblokRegisterEvent !== undefined;
    if (isBridgeEnable) {
      registerStoryblokBridge(originStory.id, (story) => setStory(story), {});
    }
  }, [originStory]);

  return story;
}

function StoryblokPageClient({ story }: { story: ISbStoryData }) {
  const storyState = useStoryblok(story);

  if (!storyState) {
    return null;
  }

  return (
    <div {...storyblokEditable(storyState.content)}>
      <h1>{storyState.name}</h1>
      <StoryblokComponent blok={storyState.content} />
    </div>
  );
}

export default StoryblokPageClient;
