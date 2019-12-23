import * as React from 'react'
import Markdown from 'markdown-it'

const md = new Markdown()

export type AboutProps = { data: string[] }

const About: React.FunctionComponent<AboutProps> = ({ data }) => (
  <section id="about">
    <h2>
      <a href="#about">About</a>
    </h2>
    {data.map((text, i) => (
      <p dangerouslySetInnerHTML={{ __html: md.renderInline(text) }} key={i} />
    ))}
  </section>
)

export default React.memo(About)
