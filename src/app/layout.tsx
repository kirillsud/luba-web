// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import StoryblokBridgeLoader from '@storyblok/react/bridge-loader';
import { ReactNode } from 'react';
import MainMenu from '../components/main-menu/main-menu';
import Page from '../components/storyblok/page/page';
import Portfolio from '../components/storyblok/portfolio/portfolio';
import Project from '../components/storyblok/project/project';
import QuestionAnswer from '../components/storyblok/question-answer/question-answer';
import '../styles.css';
import { environment } from '../utils/environment';
import { apiPlugin, storyblokInit } from '../utils/storyblok';
import styles from './layout.module.css';

storyblokInit({
  accessToken: environment.storyblokAccessTokenPublished,
  use: [apiPlugin],
  components: {
    page: Page,
    project: Project,
    portfolio: Portfolio,
    'question-answer': QuestionAnswer,
    // 'contact-form': ContactForm,
  },
});

export const metadata = {
  title: 'Welcome to Luba art!',
  description: '',
};

export default function RootLayout({ children }: { children?: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className={styles['container']}>
          <div className={styles['menu']}>
            <MainMenu />
          </div>
          <div className={styles['page']}>{children}</div>
        </div>
      </body>
      <StoryblokBridgeLoader options={{}} />
    </html>
  );
}
