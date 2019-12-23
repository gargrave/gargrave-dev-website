import * as React from 'react'
import Markdown from 'markdown-it'

import { IProjectDetail } from '../Projects.types'

import styles from './ProjectDetail.module.scss'

export type ProjectDetailProps = { project: IProjectDetail }

const md = new Markdown()

const ProjectDetail: React.FunctionComponent<ProjectDetailProps> = ({
  project,
}) => {
  const { links, subtitle, summary, title } = project
  return (
    <div className={styles.projectDetail}>
      <h3
        className={styles.title}
        dangerouslySetInnerHTML={{ __html: md.renderInline(title) }}
      />

      <div className={styles.bodyWrapper}>
        <h4
          dangerouslySetInnerHTML={{
            __html: md.renderInline(subtitle),
          }}
        />

        {summary.map((text, i) => (
          <p
            dangerouslySetInnerHTML={{ __html: md.renderInline(text) }}
            key={i}
          />
        ))}

        <h4 className={styles.linksHeader}>Related links:</h4>
        <ul className={styles.linksList}>
          {links.map(link => (
            <li key={link.url}>
              <a href={link.url} rel="noopener noreferrer" target="_blank">
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default React.memo(ProjectDetail)
