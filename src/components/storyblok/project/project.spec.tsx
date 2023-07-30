import { render } from '@testing-library/react';
import { ProjectStoryblok } from '../../../utils/components.storyblok';
import Project from './project';

// eslint-disable-next-line react/display-name
jest.mock('next/image', () => () => <div />);

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
