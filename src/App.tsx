import * as React from 'react'

import { About, Education, Experience, Projects, Skills } from './components'
import { educationData, experienceData, projectsData, skillsData } from './data'

import styles from './App.module.scss'

export type AppProps = {}

const copyrightString = () => {
  const year = new Date().getFullYear()
  return `© ${year} Gabe Hargrave`
}

export const App: React.FC<AppProps> = () => {
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
