import { render } from '@testing-library/react';

import CustomPage from './custom-page';

describe('CustomPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CustomPage />);
    expect(baseElement).toBeTruthy();
  });
});
