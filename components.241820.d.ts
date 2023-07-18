import { StoryblokStory } from 'storyblok-generate-ts';

export interface Grid3ColumnsStoryblok {
  columns?: any[];
  _uid: string;
  component: 'grid-3-columns';
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

export interface QuestionAnswerStoryblok {
  question?: string;
  answer?: RichtextStoryblok;
  _uid: string;
  component: 'question-answer';
  [k: string]: any;
}
