import createPage from '../../../components/storyblok-page/storyblok-page';

const { Page, generateStaticParams, generateMetadata } = createPage(
  'project',
  'projects'
);

export { generateStaticParams, generateMetadata };
export default Page;
