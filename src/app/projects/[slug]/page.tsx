import { draftMode } from 'next/headers';
import {
  loadStories,
  loadStory,
  StoryblokComponent,
  storyblokEditable,
} from '../../../utils/storyblok';

export default async function Page({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const story = await loadStory(
    `projects/${slug}`,
    'project',
    draftMode().isEnabled
  );
  // const storyState = useStoryblokState(story);

  return (
    <div {...storyblokEditable(story.content)}>
      <h1>{story.name}</h1>
      <StoryblokComponent blok={story.content} />
    </div>
  );
}

export async function generateStaticParams() {
  const stories = await loadStories('project');

  return stories.map((post) => ({
    slug: post.slug,
  }));
}
