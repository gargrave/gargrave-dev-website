import * as React from 'react'
import Markdown from 'markdown-it'

import { IEducationDetail } from './Education.types'

import styles from './Education.module.scss'

const md = new Markdown()

export type EducationProps = { data: IEducationDetail[] }

const Education: React.FunctionComponent<EducationProps> = ({ data }) => {
  return (
    <section id="education">
      <h2>Education</h2>

      {data.map((detail, i) => (
        <div className={styles.educationDetail} key={i}>
          <h3>{detail.title}</h3>
          <p>{detail.location}</p>
        </div>
      ))}
    </section>
  )
}

export default React.memo(Education)
