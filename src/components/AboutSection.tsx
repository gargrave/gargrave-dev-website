import styled from '@emotion/styled'
import * as React from 'react'

const RESUME_LINK =
  'https://www.dropbox.com/s/94otn62reycxas3/GabeHargrave-Resume.pdf?dl=0'
const LINKED_IN_LINK = 'https://www.linkedin.com/in/gabe-hargrave-264322133'
const GITHUB_LINK = 'https://github.com/gargrave'

const LinksContainer = styled.ul`
  li {
    line-height: 1.5rem;
  }
`

export const AboutSection: React.FC = () => (
  <section id="about">
    <h2>About</h2>
    <p>
      Hi there! My name is Gabe Hargrave, and I am a software engineer primarily
      focused on frontend web development. I love to be constantly learning and
      trying out new things, and then sharing what I've learned with those
      around me. I love working on teams where everyone is not only passionate
      about what we're building, but also about sharing knowledge and
      brainstorming and helping each other become better developers. I also love
      debating at great length what the best name for a variable would be. This
      site is more or less a glorified version of my resume, albeit with some
      expanded information in a few places.
    </p>

    <h3>Contact</h3>
    <p>
      Feel free to reach out if you have any questions, comments, concerns,
      insights, revelations, or whatever. You can find a multitude of ways to
      contact me below:
    </p>

    <LinksContainer>
      <li>
        <a href={RESUME_LINK}>Download my resume (PDF)</a>
      </li>
      <li>
        <a href={LINKED_IN_LINK}>View my LinkedIn profile</a>
      </li>
      <li>
        <a href={GITHUB_LINK}>View my GitHub profile</a>
      </li>
    </LinksContainer>
  </section>
)
