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
