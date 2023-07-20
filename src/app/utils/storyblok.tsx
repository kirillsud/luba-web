import {
  getStoryblokApi,
  ISbStoryData,
  ISbStoryParams,
  registerStoryblokBridge,
  StoryblokComponent,
} from '@storyblok/react';
import {
  render as _render,
  RenderOptions,
  StoryblokRichtext,
} from 'storyblok-rich-text-react-renderer';
import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { environment } from '../../environments/environment';

/**
 * Loads a Storyblok story by slug and a content type.
 */
export async function loadStory(
  slug: string,
  type: string
): Promise<ISbStoryData> {
  const storyblokApi = getStoryblokApi();
  const { data } = await storyblokApi.getStory(slug, {
    version: environment.production ? 'published' : 'draft',
    content_type: type,
  } as ISbStoryParams);

  return data.story;
}

/**
 * Loads a story from the router `loader` and
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

    const isBridgeEnable =
      typeof window?.storyblokRegisterEvent !== 'undefined';
    if (isBridgeEnable) {
      registerStoryblokBridge(originStory.id, (story) => setStory(story), {});
    }
  }, [originStory]);

  return story;
}

/**
 * Renders a Storyblok RichText field to HTML markup.
 * Uses `StoryblokComponent` to render bloks used in the document.
 */
export function render(
  document: StoryblokRichtext | unknown,
  options?: RenderOptions
) {
  return _render(document, {
    defaultBlokResolver: (name, props) => {
      const blok = { ...props, component: name };
      return <StoryblokComponent blok={blok} key={props._uid} />;
    },
    ...options,
  });
}
