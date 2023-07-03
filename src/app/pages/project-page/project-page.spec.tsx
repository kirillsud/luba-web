import { render } from '@testing-library/react';

import ProjectPage from './project-page';

describe('ProjectPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ProjectPage />);
    expect(baseElement).toBeTruthy();
  });
});
