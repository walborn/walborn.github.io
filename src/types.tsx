import React from 'react'

export type Period = {
  from: Date
  to?: Date
}
type Project = {
  name: string
  value: string
}

type Experience = {
  name: React.ReactNode
  description: React.ReactNode
  position: string
  period: Period,
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
  hello: React.ReactNode
  contacts: { name: string, value: string, link: string, icon: React.ReactNode }[]
  skills: string[]
  languages: { name: React.ReactNode, value: React.ReactNode }[]
  experiences: Experience[]
  educations: Education[]
  courses: Education[]
  publications: Publication[]
  about: string
}