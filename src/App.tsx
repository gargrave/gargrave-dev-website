import * as React from 'react'

import About from './components/About/About'
import Education from './components/Education/Education'
import Experience from './components/Experience/Experience'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'

import { educationData, experienceData, projectsData, skillsData } from './data'

import styles from './App.module.scss'

export type AppProps = {}

const copyrightString = () => {
  const year = new Date().getFullYear()
  return `© ${year} Gabe Hargrave`
}

const App: React.FunctionComponent<AppProps> = () => {
  return (
    <div className={styles.contentContainer}>
      <header role="banner">
        <h1 className={styles.title}>Gabe Hargrave</h1>
      </header>

      <main>
        <hr aria-hidden="true" />
        <About />
        <hr aria-hidden="true" />
        <Skills data={skillsData} />
        <hr aria-hidden="true" />
        <Experience data={experienceData} />
        <hr aria-hidden="true" />
        <Education data={educationData} />
        <hr aria-hidden="true" />
        <Projects data={projectsData} />
      </main>

      <footer role="contentinfo">
        <p className={styles.copyright}>{copyrightString()}</p>
      </footer>
    </div>
  )
}

export default React.memo(App)
