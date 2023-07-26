import { storyblokEditable } from '@storyblok/react';
import { QuestionAnswer as IconQuestionAnswer } from '@mui/icons-material';
import { render } from '../../../utils/storyblok';
import { QuestionAnswerStoryblok } from '../../../utils/components.storyblok';

export interface QuestionAnswerProps {
  blok: QuestionAnswerStoryblok;
}

export function QuestionAnswer({ blok }: QuestionAnswerProps) {
  return (
    <div {...storyblokEditable(blok)}>
      <h2>
        <IconQuestionAnswer />
        {blok.question}
      </h2>
      <div>{render(blok.answer)}</div>
    </div>
  );
}

export default QuestionAnswer;
