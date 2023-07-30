import {
  getStoryblokApi,
  ISbStoryData,
  ISbStoryParams,
} from '@storyblok/react';
import { environment } from '../../../environments/environment';

/**
 * Loads a Storyblok story by slug and a content type.
 */
export async function loadStory(
  slug: string,
  type: string
): Promise<ISbStoryData> {
  const storyblokApi = getStoryblokApi();
  const { data } = await storyblokApi.getStory(slug, {
    version: environment.production ? 'published' : 'draft',
    content_type: type,
  } as ISbStoryParams);

  return data.story;
}
