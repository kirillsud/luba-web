import { draftMode } from 'next/headers';
import StoryblokPageClient from '../../components/storyblok-page-client/storyblok-page-client';
import {
  loadStories,
  loadStory,
  StoryblokComponent,
  storyblokEditable,
} from '../../utils/storyblok';

export default async function Page({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const story = await loadStory(slug, 'page', draftMode().isEnabled);

  if (draftMode().isEnabled) {
    return <StoryblokPageClient story={story} />;
  }

  return (
    <div {...storyblokEditable(story.content)}>
      <h1>{story.name}</h1>
      <StoryblokComponent blok={story.content} />
    </div>
  );
}

export async function generateStaticParams() {
  const stories = await loadStories('page');

  return stories.map((post) => ({
    slug: post.slug,
  }));
}
