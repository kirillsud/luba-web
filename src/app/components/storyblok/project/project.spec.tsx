import { render } from '@testing-library/react';

import Project from './project';
import { ProjectStoryblok } from '../../../utils/components.storyblok';

describe('Project', () => {
  it('should render successfully', () => {
    const blok: ProjectStoryblok = {
      year: '2022',
      image: {
        id: 1,
        filename: 'test.jpg',
        name: 'test',
      },
      _uid: '123',
      component: 'project',
    };

    const { baseElement } = render(<Project blok={blok} />);
    expect(baseElement).toBeTruthy();
  });
});
