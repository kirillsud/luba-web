import { render } from '@testing-library/react';
import { Seconds } from 'src/utils/units';
import Timer from './timer';

describe('Timer', () => {
  it('should render successfully', () => {
    const finish = jest.fn();

    const { baseElement } = render(
      <Timer
        play={false}
        pause={false}
        duration={2 as Seconds}
        finish={finish}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
