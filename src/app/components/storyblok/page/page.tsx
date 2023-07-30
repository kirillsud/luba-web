import styles from './page.module.css';
import { PageStoryblok } from '../../../utils/components.storyblok';
import { storyblokEditable } from '@storyblok/react';
import { render } from '../../../utils/storyblok';

export interface PageProps {
  blok: PageStoryblok;
}

export function Page({ blok }: PageProps) {
  return <main {...storyblokEditable(blok)}>{render(blok.body)}</main>;
}

export default Page;
