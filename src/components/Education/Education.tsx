import * as React from 'react'

import { IEducationDetail } from '../../types'

import styles from './Education.module.scss'

export type EducationProps = { data: IEducationDetail[] }

export const Education: React.FC<EducationProps> = ({ data }) => {
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
