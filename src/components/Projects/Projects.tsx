import * as React from 'react'

import { IProjectDetail } from '../../types'
import { ProjectDetail } from './Detail'

import styles from './Projects.module.scss'

export type ProjectsProps = { data: IProjectDetail[] }

export const Projects: React.FC<ProjectsProps> = ({ data }) => {
  return (
    <section id="projects">
      <h2>Personal Projects and Experiments</h2>

      <p>
        A handful of non-work-related projects I have built when I have had some
        free time. Time and energy to work on this kind of stuff outside of work
        is generally fairly limited, but I do my best to ensure I stay
        up-to-date on new technologies and push myself to learn new things and
        apply them in a project somewhere. Some of these are pretty old, though,
        so tread carefully!
      </p>

      <p>
        Side note: some of these have demo links, but I really don't have time
        to actually maintain them, so don't hold it against me if you run into
        any issues.
      </p>

      <p>
        Also: be sure to check out{' '}
        <a
          href="https://github.com/gargrave?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          my GitHub profile
        </a>{' '}
        for many more various projects and experiments
      </p>

      <div className={styles.projectDetailsSection}>
        {data.map(project => (
          <ProjectDetail key={project.title} project={project} />
        ))}
      </div>
    </section>
  )
}
