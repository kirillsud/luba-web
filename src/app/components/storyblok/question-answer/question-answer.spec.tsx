import { render } from '@testing-library/react';

import QuestionAnswer from './question-answer';

describe('QuestionAnswer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <QuestionAnswer
        blok={{
          _uid: '',
          question: '',
          answer: { type: 'text' },
          component: 'question-answer',
        }}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
