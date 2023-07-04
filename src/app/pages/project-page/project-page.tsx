import styles from './project-page.module.css';

/* eslint-disable-next-line */
export interface ProjectPageProps {}

export function ProjectPage(props: ProjectPageProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ProjectPage!</h1>
    </div>
  );
}

export default ProjectPage;
