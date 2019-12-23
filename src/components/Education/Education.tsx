import * as React from 'react'
import Markdown from 'markdown-it'

import { IEducationDetail } from './Education.types'

import styles from './Education.module.scss'

const md = new Markdown()

export type EducationProps = { data: IEducationDetail[] }

const Education: React.FunctionComponent<EducationProps> = ({ data }) => {
  return (
    <section id="education">
      <h2>
        <a href="#education">Education</a>
      </h2>

      {data.map((detail, i) => (
        <ul key={i} className={styles.educationDetail}>
          <li
            className={styles.title}
            dangerouslySetInnerHTML={{
              __html: md.renderInline(detail.title),
            }}
          />

          <li
            dangerouslySetInnerHTML={{
              __html: md.renderInline(detail.location),
            }}
          />
        </ul>
      ))}
    </section>
  )
}

export default React.memo(Education)
