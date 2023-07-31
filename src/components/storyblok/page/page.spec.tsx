import { render } from '@testing-library/react';
import { PageStoryblok } from '../../../utils/components.storyblok';
import Page from './page';

describe('Page', () => {
  it('should render successfully', () => {
    const blok: PageStoryblok = {
      order: '1',
      _uid: '123',
      component: 'page',
    };

    const { baseElement } = render(<Page blok={blok} />);
    expect(baseElement).toBeTruthy();
  });
});
