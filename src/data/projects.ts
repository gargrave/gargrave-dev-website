import { IProjectDetail } from '../components/Projects/Projects.types'

const data: IProjectDetail[] = [
  {
    title: 'Gargame',
    subtitle: 'HTML5/Canvas game engine written in TypeScript',
    summary: [
      'I have used quite a few different game engines over the years, both in JS/TS land and elsewhere, and there are always a few things I dislike about each of them.',
      'The main goals here are keeping the engine as simple as possible and minimizing external dependencies--all of course, while pursuing the pipe dream of creating "the game engine of my dreams" (whatever that means).',
      'This is definitely going to be in "WIP Mode" for quite a while, as there is a lot to do. Once it is game-ready, I will be porting some of my previous game over!',
    ],
    links: [
      {
        title: 'GitHub Repo',
        url: 'https://github.com/gargrave/gargame',
      },
    ],
  },
  {
    title: 'Bookly Jr.',
    subtitle:
      'A "books and authors" CRUD app. Track your favorite authors, then track their books! Amazing!',
    summary: [
      "Bookly resurrected! Not really--this is effectively a more up-to-date fork of the previous Bookly frontend, now using Firebase. I eventually abandoned it because I had to give up on Flow, and the project was sort of all-in on Flow, and it just wasn't worth the time to try to pull it all out.",
      'I decided to just use Firebase since the database needs are so simple, and it was a major PITA keeping my own API updated and running.',
    ],
    links: [
      {
        title: 'Live Demo',
        url: 'https://bookly-prod.firebaseapp.com/account/register',
      },
      {
        title: 'Frontend Source @ GitHub',
        url: 'https://github.com/gargrave/bookly-client-firebase',
      },
    ],
  },
  {
    title: 'Bookly Classic (Retired)',
    subtitle:
      'A "books and authors" CRUD app. Track your favorite authors, then track their books! Amazing!',
    summary: [
      "I intentionally kept the design of this app simple so I could focus on learning the Hapi ecosystem. Eventually, I just didn't have enough time anymore to continue building both the frontend and backend, so I ultimately moved this project to Firebase.",
      'Frontend built with [Quasar/Vue](https://github.com/quasarframework/quasar), backend built with [Hapi](https://github.com/hapijs/hapi). For more details, check out the demo and/or repos below!',
    ],
    links: [
      {
        title: 'Frontend Source @ GitHub',
        url: 'https://github.com/gargrave/bookly-client-vue',
      },
      {
        title: 'Backend Source @ GitHub',
        url: 'https://github.com/gargrave/bookly-server',
      },
    ],
  },
  {
    title: 'Snippets',
    subtitle:
      'A "save it for later" bookmarking app, similar to Pocket or Google Keep.',
    summary: [
      "I have used Pocket and Keep off and on for a few years, and while I like them both, I also have many complaints about both of them. So I built this to include only the features I like without any of the extra junk I don't like.",
      'Frontend built with [Vue](https://github.com/vuejs/vue) + [Element](https://github.com/ElemeFE/element), backend built with [Django REST Framework](https://github.com/encode/django-rest-framework). For more details, check out the demo and/or repos below!',
      "**Note**: The backend is deployed on a free Heroku dyno, so if it takes a few seconds to spin up, don't panic! Everything is going to be okay, I promise!",
    ],
    links: [
      {
        title: 'Live Demo',
        url: 'https://www.snippets-app.com',
      },
      {
        title: 'Frontend Source @ GitHub',
        url: 'https://github.com/gargrave/snippets-client',
      },
      {
        title: 'Backend Source @ GitHub',
        url: 'https://github.com/gargrave/snippets-server',
      },
    ],
  },
  {
    title: 'GameOn',
    subtitle: 'An app to tracking gaming habits.',
    summary: [
      'A fairly simple app to allow you to track your gaming habits. I used to have a strong, very non-scientific fixation with seeing what games I was playing when, and for how many days, so I guess long-story-short, I built an app to do just that.',
      'Frontend built with [Quasar/Vue](https://github.com/quasarframework/quasar), backend built with [Django REST Framework](https://github.com/encode/django-rest-framework). For more details, check out the demo and/or repos below!',
      "**Note**: The backend is deployed on a free Heroku dyno, so if it takes a few seconds to spin up, don't panic! Everything is going to be okay, I promise!",
    ],
    links: [
      {
        title: 'Live Demo',
        url: 'https://www.gameon-app.com',
      },
      {
        title: 'Frontend Source @ GitHub',
        url: 'https://github.com/gargrave/gameon-client-quasar',
      },
      {
        title: 'Backend Source @ GitHub',
        url: 'https://github.com/gargrave/gameon-server',
      },
    ],
  },
  {
    title: 'Space Junk [Game]',
    subtitle: "A puzzle-action-matching game set in space! What's not to love?",
    summary: [
      "This was the last game We Did It Games made before we came to the unspoken conclusion that we didn't really have time to work on games anymore. The design was kept extremely minimal for these reasons, but it still turned out to be a pretty fun game.",
      'The final game was built with Unity 5 (C#), and the original prototype was made in GameMaker. It only took us a month or two total to put all of this together--remember, kids: keep your projects realistically small, and you might actually finish them!',
      'Watch the majestic launch trailer [here](https://youtu.be/c6pNwtvO1ME)! Then follow the link below to download your own copy!',
    ],
    links: [
      {
        title: "Download (It's Free)",
        url: 'https://wediditgames.itch.io/space-junk',
      },
      {
        title: 'Source @ GitHub',
        url: 'https://github.com/gargrave/SpaceJunk',
      },
    ],
  },
  {
    title: 'Fancy Plants [Game]',
    subtitle: 'A very weird, short, hastily-made puzzle game.',
    summary: [
      'This is a backup/dump of a sort-of-crappy game I made in 2013 as one of those "make a game in a week" kinds of things. It\'s not exactly game-of-the-year material, but it\'s... something, I guess.',
      "I used [LibGDX](https://github.com/libgdx/libgdx) for this one, and it's really the only game I ever completed in Java.",
    ],
    links: [
      {
        title: 'Download (Executable JAR)',
        url: 'https://github.com/gargrave/fancy-plants/releases/tag/1.0',
      },
      {
        title: 'Source @ GitHub',
        url: 'https://github.com/gargrave/fancy-plants',
      },
    ],
  },
]

export default data
