import styled from '@emotion/styled'
import * as React from 'react'

import { cleanList } from '../styles/mixins'
import { EducationDetail } from '../types'

const Education = styled.div`
  ${cleanList}

  h3 {
    margin-bottom: 0;
  }

  p {
    margin: 0;
  }
`

type EducationSectionProps = { data: EducationDetail[] }

export const EducationSection: React.FC<EducationSectionProps> = ({ data }) => {
  return (
    <section id="education">
      <h2>Education</h2>

      {data.map((detail, i) => (
        <Education key={i}>
          <h3>{detail.title}</h3>
          <p>{detail.location}</p>
        </Education>
      ))}
    </section>
  )
}
