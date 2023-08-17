import { PageStoryblok } from '../../../utils/components.storyblok';
import { render, storyblokEditable } from '../../../utils/storyblok';

export interface PageProps {
  blok: PageStoryblok;
}

export function Page({ blok }: PageProps) {
  return <div {...storyblokEditable(blok)}>{render(blok.body)}</div>;
}

export default Page;
