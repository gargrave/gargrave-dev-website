import * as React from 'react'

import { EducationDetail } from '../types'

import styles from './Education.module.scss'

type EducationSectionProps = { data: EducationDetail[] }

export const EducationSection: React.FC<EducationSectionProps> = ({ data }) => {
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
