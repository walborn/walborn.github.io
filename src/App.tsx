import clsx from 'clsx'

import styles from 'src/index.module.scss'
import resume from 'src/resume/boris.yuzhakov'
import { Resume, Period } from 'src/types'
import { declOfNum, diffMonths, formatDuration } from 'src/utils'


const birthday = (value: Date) => {
  const diff = Math.abs(new Date(Date.now() - value.getTime()).getUTCFullYear() - 1970)
  return <div>{new Intl.DateTimeFormat('ru').format(value)} ({diff} {declOfNum(diff, [ 'год', 'года', 'лет' ])})</div>
}

const experience = (periods: Resume['experiences']) => {
  let months = 0
  for (const { period } of periods) {
    const { from, to = new Date() } = period
    months += diffMonths(from, to)
  }
  return formatDuration(months)
}



const formatter = new Intl.DateTimeFormat('ru', { year: 'numeric', month: '2-digit' })

const periodMonths = ({ from, to }: Period) => [
  formatter.format(from),
  to ? formatter.format(to) : 'сейчас',
].filter(Boolean).join(' - ')

const periodformatDuration = ({ from, to }: Period) => formatDuration(diffMonths(from, to || new Date()))

const periodYears = (period: Period) => {
  const { from, to } = period
  return [
    from.getFullYear(),
    to?.getFullYear() !== from.getFullYear() && to?.getFullYear(),
  ].filter(Boolean).join(' - ')
}

function App() {
  /*
  было бы неплохо переписать на честный markdown
  return `
# ${resume.position}
# ${resume.name}
{birthday(resume.birthday)}
...
` */
  return (
    <div className={styles.root}>
      <h1>{resume.position}</h1>
      <h2>{resume.name}</h2>
      <p>{birthday(resume.birthday)}</p>
      <div className={styles.col2}>
        <div className={styles.hello}>
          <h2>Привет! 👋</h2>
          {resume.hello}
        </div>
        <div className={styles.contacts}>
          <h2>Контакты</h2>
          {resume.contacts
            .map(contact => (
              <div className={styles.contact}>
                <a href={contact.link} target="_blank">
                  <div className={styles.icon}>{contact.icon}</div>
                  <div className={styles.value}>{contact.value}</div>
                </a>
              </div>
            ))
          }
        </div>
      </div>
      <h2>Навыки</h2>
      <p>{resume.skills.join(', ')}</p>
      <h2>Языки</h2>
      {resume.languages.map(language => (
        <div className={styles.language}>
          <div className={styles.name}>{language.name}</div>
          <div className={styles.value}>{language.value}</div>
        </div>
      ))}

      <h2>
        Опыт работы
        <div className={clsx(styles.code, styles.total)}>
          {experience(resume.experiences)}
        </div>
      </h2>
      {
        resume.experiences.map(work => (
          <section className={styles.work}>
            <h3>{work.name}</h3>
            <div className={styles.description}>{work.description}</div>
            <h3 className={styles.period}>{periodMonths(work.period)}</h3>
            <div className={clsx(styles.code, styles.duration)}>{periodformatDuration(work.period)}</div>
            <h3>Обязанности</h3>
            <ul>
              {work.responsibilities.map(responsibility => (<li>{responsibility}</li>))}
            </ul>
            <h3>Достижения</h3>
            <ul>
              {work.achivements.map(achivement => (<li>{achivement}</li>))}
            </ul>
            <h3>Технологии</h3>
            {work.stack.join(', ')}
            <h3>Проекты</h3>
            <ul>
              {
                work.projects.map(project => (
                  <li>
                    <b>{project.name}</b> - {project.value}
                  </li>
                ))
              }
            </ul>
          </section>
        ))
      }
      <h2>Образование</h2>
      <ul>
        {resume.educations.map(({ period, link, value }) => (
          <li className={styles.edu}>
            <div className={styles.period}>{periodYears(period)}</div>
            <a href={link}>{value}</a>
          </li>
        ))}
      </ul>
      <h2>Курсы</h2>
      <ul>
        {resume.courses.map(({ period, link, value }) => (
          <li className={styles.edu}>
            <div className={styles.period}>{periodYears(period)}</div>
            <a href={link}>{value}</a>
          </li>
        ))}
      </ul>
      <h2>Публикации</h2>
      <ul>
        {resume.publications.map(publication => (
          <li className={styles.publication}>
            <a href={publication.link}>{publication.value}</a>
          </li>
        ))}
      </ul>     
      <h2>О себе</h2>
      {resume.about.split('\n').map(i => <p>{i}</p>)}
    </div>
  )
}

export default App
