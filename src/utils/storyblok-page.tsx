import { draftMode } from 'next/headers';
import StoryblokPageClient from '../components/storyblok-page-client/storyblok-page-client';
import { environment } from './environment';
import {
  loadStories,
  loadStory,
  StoryblokComponent,
  storyblokEditable,
} from './storyblok';

export default function page(contentType: string, storyPath = '') {
  storyPath =
    storyPath.length > 0 ? `${storyPath}/`.replace(/\/\/$/, '/') : storyPath;

  async function Page({ params: { slug } }: { params: { slug: string } }) {
    const draft = draftMode().isEnabled || !environment.production;
    const story = await loadStory(`${storyPath}${slug}`, contentType, draft);

    if (draft) {
      return <StoryblokPageClient story={story} />;
    }

    return (
      <div {...storyblokEditable(story.content)}>
        <h1>{story.name}</h1>
        <StoryblokComponent blok={story.content} />
      </div>
    );
  }

  async function generateStaticParams() {
    const stories = await loadStories(contentType, !environment.production);

    return stories.map((post) => ({
      slug: post.slug,
    }));
  }

  return {
    Page,
    generateStaticParams,
  };
}
