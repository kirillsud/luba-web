import * as process from 'process';

export const environment = {
  production: process.env['NODE_ENV'] === 'production',
  storyblokAccessTokenPublished: process.env['STORYBLOK_TOKEN_PUBLISHED'],
  storyblokAccessTokenDraft: process.env['STORYBLOK_TOKEN_DRAFT'],
  web3formsAccessKey: process.env['WEB3FORMS_TOKEN'],
};
