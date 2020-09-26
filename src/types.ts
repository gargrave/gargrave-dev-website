export type EducationDetail = {
  location: string
  title: string
}

export type ExperienceDetail = {
  bullets: string[]
  company: string
  dates: string
  jobTitle: string
  summary: string
}

export type SkillDetail = {
  subtitle: string
  title: string
}

export type ProjectLink = {
  title: string
  url: string
}

export type ProjectDetail = {
  links: ProjectLink[]
  subtitle: string
  summary: string[]
  title: string
}
