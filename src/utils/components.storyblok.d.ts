import { StoryblokStory } from 'storyblok-generate-ts';

export interface ContactFormStoryblok {
  _uid: string;
  component: 'contact-form';
  [k: string]: any;
}

export interface RichtextStoryblok {
  type: string;
  content?: RichtextStoryblok[];
  marks?: RichtextStoryblok[];
  attrs?: any;
  text?: string;
  [k: string]: any;
}

export interface PageStoryblok {
  body?: RichtextStoryblok;
  _uid: string;
  component: 'page';
  uuid?: string;
  [k: string]: any;
}

export interface PortfolioStoryblok {
  projects?: (StoryblokStory<ProjectStoryblok> | string)[];
  _uid: string;
  component: 'portfolio';
  [k: string]: any;
}

export interface AssetStoryblok {
  alt?: string;
  copyright?: string;
  id: number;
  filename: string;
  name: string;
  title?: string;
  focus?: string;
  [k: string]: any;
}

export interface ProjectStoryblok {
  year: string;
  image: AssetStoryblok;
  description?: RichtextStoryblok;
  _uid: string;
  component: 'project';
  [k: string]: any;
}

export interface QuestionAnswerStoryblok {
  question?: string;
  answer?: RichtextStoryblok;
  _uid: string;
  component: 'question-answer';
  [k: string]: any;
}
