import { StoryblokComponent } from '@storyblok/react';
import {
  render as _render,
  RenderOptions,
  StoryblokRichtext,
} from 'storyblok-rich-text-react-renderer';

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
