import { IExperienceDetail } from '../types'

export const experienceData: IExperienceDetail[] = [
  {
    jobTitle: 'Senior Software Engineer',
    company: 'Vacasa',
    location: 'Portland, OR',
    dates: '10/2018 to Present',
    summary:
      'Senior frontend engineer building housekeeping scheduling and management tools',
    bullets: [
      'Collaborated with UX and Product to set quarterly plans and ensure technical feasibility',
      'Led frontend dev team in building two greenfield apps for scheduling and managing housekeeping teams around the world',
      'Acted as a guiding voice for setting development standards, choosing tooling & libraries, and helping maintain an effective team culture',
      'Built API endpoints (Django) in conjunction with frontend features',
      'Led cross-team instructional sessions to share solutions to common problems',
      'Developed and executed a technical interview process specific to the team’s requirements',
      'Provided mentoring and guidance for more junior developers',
      'Technologies used: TypeScript, React/Redux, PWA, Sass, Jest, TestCafe, Django + JSON:API',
    ],
  },
  {
    jobTitle: 'Frontend Engineer',
    company: 'Opal',
    location: 'Portland, OR',
    dates: '08/2017 to 10/2018',
    summary: 'Frontend engineer on _Opal_, a marketing collaboration platform',
    bullets: [
      'Worked with functional team to plan, build, and maintain features in our part of the app',
      'Collaborated on documentation both before and after feature releases',
      'Built API endpoints (Rails) in conjunction with frontend features',
      'Technologies used: React/Redux, Backbone/Marionette, Mocha/Chai, CoffeeScript, Sass, Rails, Vagrant, PostgreSQL',
    ],
  },
  {
    jobTitle: 'Frontend Engineer',
    company: 'West Corporation',
    location: 'Portland, OR',
    dates: '04/2015 to 08/2017',
    summary:
      'Frontend engineer on _IER_, an event registration e-commerce platform',
    bullets: [
      'Led team in rebuilding existing frontend jQuery/Knockout codebase with AngularJS 1.x',
      'Provided support, bug-fixes, and custom builds for both internal and external clients',
      'Managed Git/BitBucket repositories to ensure compliance with code style guidelines and keep all custom builds in sync with fixes and new features',
      'Assisted backend team in mitigating bugs in C#/ASP.NET codebase',
      'Technologies used: AngularJS 1.x, React/Redux, Sass, Bootstrap, Liquid templating engine, Grunt',
    ],
  },
  {
    jobTitle: 'Lead Game & Web Developer',
    company: 'We Did It Games',
    location: 'Portland, OR',
    dates: '01/2011 to 03/2015',
    summary: 'Lead game and web developer for game development team',
    bullets: [
      'Released one game developed with Unity/C#, and two games developed with Flash/ActionScript 3',
      'Designed, built, and maintained company website, Wordpress blog, and press-kit',
      'Developed custom WordPress theme and custom high scores API (PHP & MySQL)',
    ],
  },
]
