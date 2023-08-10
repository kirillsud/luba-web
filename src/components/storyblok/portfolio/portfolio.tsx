import Link from 'next/link';
import React from 'react';
import { StoryblokStory } from 'storyblok-generate-ts';
import {
  PortfolioStoryblok,
  ProjectStoryblok,
} from '../../../utils/components.storyblok';
import { storyblokEditable } from '../../../utils/storyblok';
import styles from './portfolio.module.css';

export interface PortfolioProps {
  blok: PortfolioStoryblok;
}

export function Portfolio({ blok }: PortfolioProps) {
  const projects =
    (blok.projects?.filter(
      (project) => typeof project === 'object'
    ) as StoryblokStory<ProjectStoryblok>[]) || [];

  return (
    <div className={styles.container} {...storyblokEditable(blok)}>
      {projects.map((project, index) => (
        <Link
          className={styles.project}
          href={`/projects/${project.slug}`}
          key={project.id}
        >
          <div className={styles.projectName}>{project.name}</div>

          <img
            src={project.content.image.filename}
            alt={project.content.image.alt}
            loading="lazy"
          />
        </Link>
      ))}
    </div>
  );
}

export default Portfolio;
