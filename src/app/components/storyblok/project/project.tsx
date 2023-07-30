import styles from './project.module.css';
import { storyblokEditable } from '@storyblok/react';
import { render } from '../../../utils/storyblok';
import { ProjectStoryblok } from '../../../utils/components.storyblok';

export interface ProjectProps {
  blok: ProjectStoryblok;
}

export function Project({ blok }: ProjectProps) {
  const notEmptyDescription = blok.description
    ? blok.description.content?.length === 1
      ? blok.description.content?.[0]?.content !== undefined
      : true
    : false;

  return (
    <div className={styles.page} {...storyblokEditable(blok)}>
      <figure>
        <img src={blok.image.filename} alt={blok.image.alt} />
        <figcaption>{blok.year}</figcaption>
      </figure>
      {notEmptyDescription && (
        <>
          <hr />
          {render(blok.description)}
        </>
      )}
    </div>
  );
}

export default Project;
