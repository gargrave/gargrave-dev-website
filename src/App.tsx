import * as React from 'react'

import About from './components/About/About'
import Education from './components/Education/Education'
import Experience from './components/Experience/Experience'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'

import aboutData from './data/about'
import educationData from './data/education'
import experienceData from './data/experience'
import projectsData from './data/projects'
import skillsData from './data/skills'

import styles from './App.module.scss'

export type AppProps = {}

const copyrightString = () => {
  const year = new Date().getFullYear()
  return `© ${year} Gabe Hargrave`
}

const App: React.FC<AppProps> = () => {
  return (
    <div>
      <main className={styles.contentContainer}>
        <header>
          <h1 className={styles.title}>Gabe Hargrave</h1>
        </header>
        <hr />

        <About data={aboutData} />
        <hr />
        <Skills data={skillsData} />
        <hr />
        <Experience data={experienceData} />
        <hr />
        <Education data={educationData} />
        <hr />
        <Projects data={projectsData} />

        <footer>
          <p className={styles.copyright}>{copyrightString()}</p>
        </footer>
      </main>
    </div>
  )
}

export default React.memo(App)
