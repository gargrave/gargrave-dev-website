import * as React from 'react'

import { IExperienceDetail } from './Experience.types'

import ExperienceDetail from './Detail/ExperienceDetail'

export type ExperienceProps = { data: IExperienceDetail[] }

const Experience: React.FunctionComponent<ExperienceProps> = ({ data }) => {
  return (
    <section id="experience">
      <h2>
        <a href="#experience">Experience</a>
      </h2>

      {data.map((detail, i) => (
        <ExperienceDetail key={i} detail={detail} />
      ))}
    </section>
  )
}

export default React.memo(Experience)
