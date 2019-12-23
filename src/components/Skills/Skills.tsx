import * as React from 'react'
import Markdown from 'markdown-it'

import { ISkillDetail } from './Skills.types'

import styles from './Skills.module.scss'

const md = new Markdown()

export type SkillsProps = { data: ISkillDetail[] }

const Skills: React.FunctionComponent<SkillsProps> = ({ data }) => {
  return (
    <section id="skills">
      <h2>
        <a href="#skills">Skills</a>
      </h2>

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

export default React.memo(Skills)
