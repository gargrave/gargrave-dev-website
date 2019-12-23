import * as React from 'react'

import { IProjectDetail } from './Projects.types'

import ProjectDetail from './Detail/ProjectDetail'

import styles from './Projects.module.scss'

export type ProjectsProps = { data: IProjectDetail[] }

const Projects: React.FunctionComponent<ProjectsProps> = ({ data }) => {
  return (
    <section id="projects">
      <h2>
        <a href="#projects">Projects</a>
      </h2>

      <p>
        A handful of non-work-related projects I have built when I have had some
        free time. Time and energy to work on this kind of stuff outside of work
        is generally fairly limited, but I do my best to ensure I stay
        up-to-date on new technologies and push myself to learn new things and
        apply them in a project somewhere.
      </p>

      <p>
        (There are more repos for a handful of various older and smaller
        projects available{' '}
        <a
          href="https://github.com/gargrave?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </a>{' '}
        as well, but they are not as user-friendly as the ones listed below, so
        proceed at your own risk!)
      </p>

      <div className={styles.projectDetailsSection}>
        {data.map(project => (
          <ProjectDetail key={project.title} project={project} />
        ))}
      </div>
    </section>
  )
}

export default React.memo(Projects)
