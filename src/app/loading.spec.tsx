import { render } from '@testing-library/react';
import Loading from './loading';

describe('AppLoader', () => {
  it('should render successfully', () => {
    const { baseElement } = render(Loading());
    expect(baseElement).toBeTruthy();
  });
});
