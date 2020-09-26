import styled from '@emotion/styled'
import { css } from '@emotion/core'
import * as React from 'react'
import Markdown from 'markdown-it'

import { screenSizeLg, screenSizeSm } from '../styles/mixins'
import { ExperienceDetail } from '../types'

const md = new Markdown()

const ExperienceContainer = styled.section`
  & + & {
    margin-top: 32px;
  }

  ${screenSizeLg(css`
    padding-left: 1rem;
  `)}
`

const JobTitle = styled.h3`
  margin: 3px 0;
`

const Summary = styled.p`
  margin: 0;
  margin-top: 0.75rem;
`

const BulletList = styled.ul`
  margin-top: 0.5rem;

  ${screenSizeSm(css`
    padding: 1rem;
  `)}
`

const Bullet = styled.li`
  font-size: 0.9rem;
  line-height: 1.5rem;
`

type ExperienceProps = { detail: ExperienceDetail }

export const Experience: React.FC<ExperienceProps> = ({ detail }) => {
  const { bullets, company, dates, jobTitle, summary } = detail

  return (
    <ExperienceContainer>
      <div>
        <JobTitle>
          {jobTitle && `${jobTitle}, `} {company}
        </JobTitle>

        <div dangerouslySetInnerHTML={{ __html: md.renderInline(dates) }} />
      </div>

      <Summary dangerouslySetInnerHTML={{ __html: md.renderInline(summary) }} />

      {!!bullets.length && (
        <BulletList>
          {bullets.map((bullet, i) => {
            return (
              <Bullet
                dangerouslySetInnerHTML={{ __html: md.renderInline(bullet) }}
                key={i}
              />
            )
          })}
        </BulletList>
      )}
    </ExperienceContainer>
  )
}
