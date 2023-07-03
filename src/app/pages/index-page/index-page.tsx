import styles from './index-page.module.css';

/* eslint-disable-next-line */
export interface IndexPageProps {}

export function IndexPage(props: IndexPageProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to IndexPage!</h1>
    </div>
  );
}

export default IndexPage;
