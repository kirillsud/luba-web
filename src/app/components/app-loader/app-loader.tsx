import styles from './app-loader.module.css';

/* eslint-disable-next-line */
export interface AppLoaderProps {}

export function AppLoader(props: AppLoaderProps) {
  return <div className={styles['container']}>Application is loading...</div>;
}

export default AppLoader;
