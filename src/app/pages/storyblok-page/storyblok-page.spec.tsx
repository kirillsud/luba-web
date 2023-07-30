import { ISbStoryData } from '@storyblok/react';
import { render } from '@testing-library/react';
import StoryblokPage from './storyblok-page';

jest.mock('@storyblok/react', () => ({
  StoryblokComponent: jest.fn(),
  storyblokEditable: jest.fn(),
}));

jest.mock('./storyblok-page.hook', () => ({
  useStoryblokFromRoute: (): ISbStoryData => ({
    alternates: [],
    content: [],
    created_at: '',
    full_slug: '',
    group_id: '',
    id: 0,
    is_startpage: false,
    meta_data: {},
    name: '',
    parent_id: 0,
    position: 0,
    published_at: null,
    first_published_at: null,
    slug: '',
    lang: '',
    sort_by_date: null,
    tag_list: [],
    uuid: '',
  }),
}));

describe('StoryblokPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<StoryblokPage />);
    expect(baseElement).toBeTruthy();
  });
});
