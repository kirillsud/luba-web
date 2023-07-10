import { render } from '@testing-library/react';
import { Seconds } from 'src/app/utils/units';
import Timer from './timer';

describe('Timer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Timer
        play={false}
        pause={false}
        duration={2 as Seconds}
        finish={() => {}}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
