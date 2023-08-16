'use client';

// eslint-disable-next-line no-restricted-imports
import {
  ISbStoryData,
  setComponents,
  StoryblokComponent,
  storyblokEditable,
  useStoryblokState,
} from '@storyblok/react';
import ContactForm from '../storyblok/contact-form/contact-form';
import Page from '../storyblok/page/page';
import Portfolio from '../storyblok/portfolio/portfolio';
import Project from '../storyblok/project/project';
import QuestionAnswer from '../storyblok/question-answer/question-answer';

function StoryblokPageClient({ story }: { story: ISbStoryData }) {
  const storyState = useStoryblokState(story);

  setComponents({
    page: Page,
    project: Project,
    portfolio: Portfolio,
    'question-answer': QuestionAnswer,
    'contact-form': ContactForm,
  });

  if (!storyState) {
    return null;
  }

  return (
    <>
      <h2>{storyState.name}</h2>
      <article {...storyblokEditable(storyState.content)}>
        <StoryblokComponent blok={storyState.content} />
      </article>
    </>
  );
}

export default StoryblokPageClient;
