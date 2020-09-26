import * as React from 'react'

import { ExperienceDetail } from '../types'
import { Experience } from './Experience'

type ExperienceSectionProps = { data: ExperienceDetail[] }

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({
  data,
}) => {
  return (
    <section id="experience">
      <h2>Experience</h2>

      {data.map((detail, i) => (
        <Experience key={i} detail={detail} />
      ))}
    </section>
  )
}
