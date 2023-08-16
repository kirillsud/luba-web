import { draftMode } from 'next/headers';
import { environment } from '../../utils/environment';
import { metadataTitle } from '../../utils/metadata';
import {
  loadStories,
  loadStory,
  StoryblokComponent,
} from '../../utils/storyblok';
import StoryblokPageClient from './storyblok-page-client';

interface PageParams {
  params: { slug: string };
}

export default function page(contentType: string, storyPath = '') {
  storyPath =
    storyPath.length > 0 ? `${storyPath}/`.replace(/\/\/$/, '/') : storyPath;

  async function Page({ params: { slug } }: PageParams) {
    const draft = draftMode().isEnabled;
    const story = await loadStory(`${storyPath}${slug}`, contentType, draft);

    if (draft) {
      return <StoryblokPageClient story={story} />;
    }

    return (
      <>
        <h2>{story.name}</h2>
        <article>
          <StoryblokComponent blok={story.content} />
        </article>
      </>
    );
  }

  async function generateStaticParams() {
    const stories = await loadStories(contentType, !environment.production);

    return stories.map((post) => ({
      slug: post.slug,
    }));
  }

  async function generateMetadata({ params: { slug } }: PageParams) {
    const draft = draftMode().isEnabled;
    const story = await loadStory(`${storyPath}${slug}`, contentType, draft);

    return {
      title: metadataTitle(story.name),
    };
  }

  return {
    Page,
    generateStaticParams,
    generateMetadata,
  };
}
