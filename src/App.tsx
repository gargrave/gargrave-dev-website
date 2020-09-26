import styled from '@emotion/styled'
import { css } from '@emotion/core'
import * as React from 'react'

import { screenSizeLg } from './styles/mixins'
import {
  AboutSection,
  EducationSection,
  ExperienceSection,
  ProjectsSection,
  SkillsSection,
} from './components'
import { educationData, experienceData, projectsData, skillsData } from './data'

const copyrightString = () => {
  const year = new Date().getFullYear()
  return `© ${year} Gabe Hargrave`
}

const AppContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.35);
  border: 0;
  color: #242424;
  margin: 0 auto;
  max-width: 800px;
  padding: 20px;

  ${screenSizeLg(css`
    border: solid 1px rgba(0, 0, 0, 0.1);
    padding: 24px 50px;
  `)}
`

const Title = styled.h1`
  color: #6b6b6b;
  font-weight: normal;
  font-size: 2.5rem;
  margin: 0;
  text-align: center;

  ${screenSizeLg(css`
    margin-top: 1.5rem;
    margin-bottom: 40px;
    text-align: left;
  `)}
`

const Copyright = styled.p`
  color: #8f8f8f;
  font-size: 0.9rem;
  margin-bottom: 0;
  margin-top: 24px;
  text-align: center;
`

type AppProps = {
  className?: string
}

export const App: React.FC<AppProps> = ({ className }) => {
  return (
    <AppContainer className={className}>
      <header role="banner">
        <Title>Gabe Hargrave</Title>
      </header>

      <main>
        <hr aria-hidden="true" />
        <AboutSection />
        <hr aria-hidden="true" />
        <SkillsSection data={skillsData} />
        <hr aria-hidden="true" />
        <ExperienceSection data={experienceData} />
        <hr aria-hidden="true" />
        <EducationSection data={educationData} />
        <hr aria-hidden="true" />
        <ProjectsSection data={projectsData} />
      </main>

      <footer role="contentinfo">
        <Copyright>{copyrightString()}</Copyright>
      </footer>
    </AppContainer>
  )
}
