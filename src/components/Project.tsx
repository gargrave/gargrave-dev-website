import styled from '@emotion/styled'
import { css } from '@emotion/core'
import * as React from 'react'
import Markdown from 'markdown-it'

import { screenSizeLg } from '../styles/mixins'
import { ProjectDetail } from '../types'

const md = new Markdown()

const ProjectContainer = styled.div`
  background: #fefefe;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
  box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.07),
    0px 1px 9px 0px rgba(0, 0, 0, 0.07);
  max-width: 600px;

  & + & {
    margin-top: 2rem;
  }
`

const ProjectTitle = styled.h3`
  background: #dcdcdc;
  color: #464646;
  margin: 0;
  padding: 0.75rem 1rem;
`

const BodyContainer = styled.div`
  padding: 0.5rem 1rem;
  padding-top: 0;
`

const LinksListHeader = styled.h4`
  margin: 0;
`

const LinksList = styled.ul`
  line-height: 1.8rem;
  margin-top: 0.5rem;
  padding-left: 2rem;

  ${screenSizeLg(css`
    line-height: 1.5rem;
  `)}
`

type ProjectProps = { project: ProjectDetail }

export const Project: React.FC<ProjectProps> = ({ project }) => {
  const { links, subtitle, summary, title } = project

  return (
    <ProjectContainer>
      <ProjectTitle
        dangerouslySetInnerHTML={{ __html: md.renderInline(title) }}
      />

      <BodyContainer>
        <h4
          dangerouslySetInnerHTML={{
            __html: md.renderInline(subtitle),
          }}
        />

        {summary.map((text, i) => (
          <p
            dangerouslySetInnerHTML={{ __html: md.renderInline(text) }}
            key={i}
          />
        ))}

        <LinksListHeader>Related links:</LinksListHeader>
        <LinksList>
          {links.map(link => (
            <li key={link.url}>
              <a href={link.url} rel="noopener noreferrer" target="_blank">
                {link.title}
              </a>
            </li>
          ))}
        </LinksList>
      </BodyContainer>
    </ProjectContainer>
  )
}
