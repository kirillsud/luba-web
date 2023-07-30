import { render } from '@testing-library/react';

import AppLoader from './app-loader';

describe('AppLoader', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AppLoader />);
    expect(baseElement).toBeTruthy();
  });
});
