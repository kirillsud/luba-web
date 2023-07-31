import { QuestionAnswerStoryblok } from '../../../utils/components.storyblok';
import { render, storyblokEditable } from '../../../utils/storyblok';

export interface QuestionAnswerProps {
  blok: QuestionAnswerStoryblok;
}

export function QuestionAnswer({ blok }: QuestionAnswerProps) {
  return (
    <div {...storyblokEditable(blok)}>
      <h2>{blok.question}</h2>
      <div>{render(blok.answer)}</div>
    </div>
  );
}

export default QuestionAnswer;
