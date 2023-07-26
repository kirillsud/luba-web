import { useLoaderData } from 'react-router-dom';
import { ISbStoryData, registerStoryblokBridge } from '@storyblok/react';
import { useEffect, useState } from 'react';

/**
 * Loads a story from the router `loader` data and
 * marks it as editable in Storyblok administrator panel.
 */
export function useStoryblokFromRoute() {
  const originStory = useLoaderData() as ISbStoryData;
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
