import { storyblokEditable } from '@storyblok/react';
import { QuestionAnswer as IconQuestionAnswer } from '@mui/icons-material';
import { render } from '../../utils/storyblok';
import { QuestionAnswerStoryblok } from '../../../../components.241820';

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
