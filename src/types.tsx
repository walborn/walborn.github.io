import type React from 'react'

export type Period = {
  from: Date
  to?: Date
}
type Project = {
  key: string
  name: React.ReactNode
  value: string
}

type Experience = {
  key: string
  name: React.ReactNode
  description: React.ReactNode
  position: string
  period: Period
  responsibilities: string[]
  achivements: React.ReactNode[]
  stack: string[]
  projects: Project[]
}

type Education = {
  period: Period
  link: string
  value: string
}
type Publication = {
  link: string
  value: string
}

export interface Resume {
  position: string
  name: string
  birthday: Date
  hello: React.ReactNode[]
  contacts: {
    key: string
    name: React.ReactNode
    value: string
    link: string
    icon: React.ReactNode
  }[]
  skills: string[]
  languages: { key: string; name: React.ReactNode; value: React.ReactNode }[]
  experiences: Experience[]
  educations: Education[]
  courses: Education[]
  publications: Publication[]
  about: string
}
