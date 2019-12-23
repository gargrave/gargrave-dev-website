import * as React from 'react'
import Markdown from 'markdown-it'

import { ISkillDetail } from '../../types'

import styles from './Skills.module.scss'

const md = new Markdown()

export type SkillsProps = { data: ISkillDetail[] }

export const Skills: React.FC<SkillsProps> = ({ data }) => {
  return (
    <section id="skills">
      <h2>Skills</h2>

      <ul className={styles.skillsList}>
        {data.map((skill, i) => (
          <li key={i}>
            <strong
              dangerouslySetInnerHTML={{ __html: md.renderInline(skill.title) }}
            />
            &nbsp;
            <span
              className={styles.subttitle}
              dangerouslySetInnerHTML={{
                __html: md.renderInline(skill.subtitle),
              }}
            />
          </li>
        ))}
      </ul>
    </section>
  )
}
