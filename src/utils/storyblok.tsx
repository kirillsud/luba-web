// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line no-restricted-imports
import * as Storyblok from '@storyblok/react/rsc';
import {
  render as _render,
  RenderOptions,
  StoryblokRichtext,
} from 'storyblok-rich-text-react-renderer';
import { environment } from './environment';

/**
 * Loads a Storyblok story by slug and a content type.
 */
export async function loadStory(
  slug: string,
  content_type: string,
  draft: boolean
): Promise<Storyblok.ISbStoryData> {
  const storyblokApi = Storyblok.getStoryblokApi();
  const version = draft ? 'draft' : 'published';
  const token = draft
    ? environment.storyblokAccessTokenDraft
    : environment.storyblokAccessTokenPublished;

  const { data } = await storyblokApi.getStory(slug, {
    content_type,
    token,
    version,
    resolve_relations: 'portfolio.projects',
  });

  return data.story;
}

/**
 * Loads Storyblok stories by a content type.
 */
export async function loadStories(
  content_type: string,
  draft: boolean
): Promise<Storyblok.ISbStoryData[]> {
  const storyblokApi = Storyblok.getStoryblokApi();
  const version = draft ? 'draft' : 'published';
  const token =
    version === 'draft'
      ? environment.storyblokAccessTokenDraft
      : environment.storyblokAccessTokenPublished;

  const { data } = await storyblokApi.getStories({
    token,
    version,
    content_type,
  });

  return data.stories;
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
      return <Storyblok.StoryblokComponent blok={blok} key={props._uid} />;
    },
    ...options,
  });
}

// Reexport Storyblok API because of an error in the origin package.
export const storyblokEditable = Storyblok.storyblokEditable;
export const StoryblokComponent = Storyblok.StoryblokComponent;
export const apiPlugin = Storyblok.apiPlugin;
export const storyblokInit = Storyblok.storyblokInit;
