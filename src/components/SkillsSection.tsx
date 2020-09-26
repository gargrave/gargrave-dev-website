import styled from '@emotion/styled'
import { css } from '@emotion/core'
import * as React from 'react'
import Markdown from 'markdown-it'

import { screenSizeLg, screenSizeSm } from '../styles/mixins'
import { SkillDetail } from '../types'

const md = new Markdown()

const SkillsList = styled.ul`
  ${screenSizeSm(css`
    list-style: none;
    padding: 0;

    li + li {
      margin-top: 1rem;
    }
  `)}

  ${screenSizeLg(css`
    line-height: 1.6rem;
  `)}
`

const SubTitle = styled.span`
  color: #5f5f5f;
  display: block;
  font-size: 0.9rem;

  ${screenSizeLg(css`
    display: inline-block;
  `)}
`

type SkillsSectionProps = { data: SkillDetail[] }

export const SkillsSection: React.FC<SkillsSectionProps> = ({ data }) => {
  return (
    <section id="skills">
      <h2>Skills</h2>

      <SkillsList>
        {data.map((skill, i) => (
          <li key={i}>
            <strong
              dangerouslySetInnerHTML={{ __html: md.renderInline(skill.title) }}
            />
            &nbsp;
            <SubTitle
              dangerouslySetInnerHTML={{
                __html: md.renderInline(skill.subtitle),
              }}
            />
          </li>
        ))}
      </SkillsList>
    </section>
  )
}
