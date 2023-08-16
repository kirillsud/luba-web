import createPage from '../../../components/storyblok-page/storyblok-page';

const { Page, generateStaticParams, generateMetadata } = createPage(
  'portfolio',
  'portfolio'
);

export { generateStaticParams, generateMetadata };
export default Page;
