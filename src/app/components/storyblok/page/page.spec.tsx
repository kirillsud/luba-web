import { render } from '@testing-library/react';

import Page from './page';
import { PageStoryblok } from '../../../utils/components.storyblok';

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
