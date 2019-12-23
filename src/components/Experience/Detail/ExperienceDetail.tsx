import * as React from 'react'
import Markdown from 'markdown-it'

import { IExperienceDetail } from '../../../types'

import styles from './ExperienceDetail.module.scss'

const md = new Markdown()

export type ExperienceDetailProps = { detail: IExperienceDetail }

export const ExperienceDetail: React.FC<ExperienceDetailProps> = ({
  detail,
}) => {
  const { bullets, company, dates, jobTitle, summary } = detail

  return (
    <section className={styles.experienceDetail}>
      <div>
        <h3 className={styles.jobtitle}>
          {jobTitle && `${jobTitle}, `} {company}
        </h3>

        <div
          className={styles.dates}
          dangerouslySetInnerHTML={{ __html: md.renderInline(dates) }}
        />
      </div>

      <p
        className={styles.summary}
        dangerouslySetInnerHTML={{ __html: md.renderInline(summary) }}
      />

      {!!bullets.length && (
        <ul className={styles.bullets}>
          {bullets.map((bullet, i) => {
            return (
              <li
                className={styles.bulletPoint}
                dangerouslySetInnerHTML={{ __html: md.renderInline(bullet) }}
                key={i}
              />
            )
          })}
        </ul>
      )}
    </section>
  )
}
