import {
  render as _render,
  RenderOptions,
  StoryblokRichtext,
} from 'storyblok-rich-text-react-renderer';
import {
  getStoryblokApi,
  ISbStoryData,
  StoryblokComponent,
} from '@storyblok/react';
import { environment } from '../../environments/environment';

/**
 * Loads a Storyblok story by slug and a content type.
 * @param slug
 * @param type
 */
export async function loadStory(
  slug: string,
  type: string
): Promise<ISbStoryData> {
  const storyblokApi = getStoryblokApi();
  const { data } = await storyblokApi.get(`cdn/stories/${slug}`, {
    version: environment.production ? 'published' : 'draft',
    content_type: type,
  });

  return data.story;
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
