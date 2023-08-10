import { render } from '@testing-library/react';
import { ProjectStoryblok } from '../../../utils/components.storyblok';
import Portfolio from './portfolio';

// eslint-disable-next-line react/display-name
jest.mock('next/image', () => () => <div />);

describe('Portfolio', () => {
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

    const { baseElement } = render(<Portfolio blok={blok} />);
    expect(baseElement).toBeTruthy();
  });
});
