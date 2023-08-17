// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import StoryblokBridgeLoader from '@storyblok/react/bridge-loader';
import Link from 'next/link';
import { ReactNode } from 'react';
import MainMenu from '../components/main-menu/main-menu';
import ContactForm from '../components/storyblok/contact-form/contact-form';
import Page from '../components/storyblok/page/page';
import Portfolio from '../components/storyblok/portfolio/portfolio';
import Project from '../components/storyblok/project/project';
import QuestionAnswer from '../components/storyblok/question-answer/question-answer';
import '../styles.css';
import { environment } from '../utils/environment';
import { metadataTitle } from '../utils/metadata';
import { apiPlugin, storyblokInit } from '../utils/storyblok';
import styles from './layout.module.css';

storyblokInit({
  accessToken: environment.production
    ? environment.storyblokAccessTokenPublished
    : environment.storyblokAccessTokenDraft,
  use: [apiPlugin],
  components: {
    page: Page,
    project: Project,
    portfolio: Portfolio,
    'question-answer': QuestionAnswer,
    'contact-form': ContactForm,
  },
});

export const metadata = {
  title: metadataTitle(),
  description: '',
};

export default async function RootLayout({
  children,
}: {
  children?: ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width" />
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
          const appHeight = () => {
            const doc = document.documentElement
            doc.style.setProperty('--app-height', window.innerHeight + 'px')
          }

          let resizeTimer;
          window.addEventListener('resize', () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(appHeight, 250);
          });

          appHeight()
        `,
          }}
        />
      </head>

      <body className={styles['container']}>
        <header>
          <h1>
            <Link href="/">Portfolio Lubov Frolova</Link>
          </h1>
        </header>

        <main className={styles['page']}>{children}</main>

        <footer>
          <MainMenu />
        </footer>
      </body>

      <StoryblokBridgeLoader options={{}} />
    </html>
  );
}
