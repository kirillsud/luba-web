// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import StoryblokBridgeLoader from '@storyblok/react/bridge-loader';
import { ReactNode } from 'react';
import MainMenu from '../components/main-menu/main-menu';
import Page from '../components/storyblok/page/page';
import Project from '../components/storyblok/project/project';
import QuestionAnswer from '../components/storyblok/question-answer/question-answer';
import { environment } from '../remove/environments/environment';
import '../styles.css';
import { apiPlugin, storyblokInit } from '../utils/storyblok';
import styles from './layout.module.css';

storyblokInit({
  accessToken: environment.storyblokAccessToken,
  use: [apiPlugin],
  components: {
    page: Page,
    project: Project,
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
