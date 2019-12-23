import * as React from 'react'

import { IExperienceDetail } from '../../types'
import { ExperienceDetail } from './Detail'

export type ExperienceProps = { data: IExperienceDetail[] }

export const Experience: React.FC<ExperienceProps> = ({ data }) => {
  return (
    <section id="experience">
      <h2>Experience</h2>

      {data.map((detail, i) => (
        <ExperienceDetail key={i} detail={detail} />
      ))}
    </section>
  )
}
