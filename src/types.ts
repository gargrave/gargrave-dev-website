export interface IEducationDetail {
  location: string
  title: string
}

export interface IExperienceDetail {
  bullets: string[]
  company: string
  dates: string
  jobTitle: string
  location: string
  summary: string
}

export interface ISkillDetail {
  subtitle: string
  title: string
}

export interface IProjectLink {
  title: string
  url: string
}

export interface IProjectDetail {
  links: IProjectLink[]
  subtitle: string
  summary: string[]
  title: string
}
