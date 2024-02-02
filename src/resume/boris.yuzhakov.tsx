import EmailSVG from 'src/assets/contacts/email.svg'
import GithubSVG from 'src/assets/contacts/github.svg'
import LinkedinSVG from 'src/assets/contacts/linkedin.svg'
import PhoneSVG from 'src/assets/contacts/phone.svg'
import TelegramSVG from 'src/assets/contacts/telegram.svg'
import styles from 'src/index.module.scss'
import { Resume } from 'src/types'

{/* eslint-disable max-len */}
const resume: Resume = {
  position: 'Frontend developer | React',
  name: 'Южаков Борис',
  birthday: new Date(1986, 10, 29),
  hello: [
    'Я во фронте больше 8 лет. Фанат React и TS. Работал в различных компаниях, от стартапа до большого продукта. Писал приложения под большую нагрузку и быстрый time to market.',
    'Постоянно держу себя в форме и изучаю современные технологии. Хорошо владею английским. Веду блог на хабре и в телеграмме.',
  ],
  contacts: [
    { name: 'email', icon: <img src={EmailSVG} className={styles.icon} alt="Email" />, value: 'yuzhakov.boris@gmail.com', link: 'mailto:yuzhakov.boris@gmail.com' },
    { name: 'telegram', icon: <img src={TelegramSVG} className={styles.icon} alt="Telegram" />, value: 't.me/codebor', link: 'https://t.me/codebor' },
    { name: 'linkedin', icon: <img src={LinkedinSVG} className={styles.icon} alt="Linkedin" />, value: 'linkedin.com/in/codebor', link: 'https://linkedin.com/in/codebor' },
    { name: 'github', icon: <img src={GithubSVG} className={styles.icon} alt="Github" />, value: 'github.com/walborn', link: 'https://github.com/walborn' },
    { name: 'phone', icon: <img src={PhoneSVG} className={styles.icon} alt="Phone" />, value: '+79250579756', link: 'tel:+79250579756' },
  ],
  skills: [ 'TypeScript', 'React', 'NextJS', 'Redux', 'Redux Toolkit', 'React Query', 'GraphQL', 'SCSS', 'Sass', 'TailwindCSS', 'Webpack', 'Vite', 'Figma', 'PWA', 'Storybook', 'Jest', 'Docker' ],
  languages: [
    {
      name: 'Английский 🇬🇧',
      value: <div>Intermediate <div className={styles.code}>B1</div></div>,
    },
  ],
  experiences: [
    {
      name: <a href="https://www.sibur.digital/">Sibur Digital</a>,
      description: 'Дочка нефтехимической компании Sibur. Создаёт бизнес решения, используя машинное обучение',
      position: 'frontend developer',
      period: { from: new Date(2020, 8) },
      responsibilities: [
        'Разработка приложений для работы с BigData',
        'Участие в создании внутреннего UI Kit',
        'Проведение ревью кода',
        'Проведение интервью',
      ],
      achivements: [
        <div>Запустил с нуля два успешных проекта <s>и один неуспешный</s></div>,
        'Затащил Vite во все проекты, сильно ускорив работу приложений',
        'Провёл более 30 собеседований с кандидатами',
      ],
      stack: [ 'TS', 'ReactJS', 'Redux Toolkit', 'Vite', 'Jest', 'Storybook' ],
      projects: [
        { name: 'kalancha', value: 'сервис нотификации, который слушает события из кафки, анализирует их и, в случае проблем, отправляет пользователю сообщения через различные каналы (sms, email, jira)' },
        { name: 'mlfw', value: '(Machine Learning FrameWork) - веб интерфейс для API, который помогает управляться с моделями машинного обучения (просмотр, история, создание, загрузка, запуск, удаление и т. д.)' }, 
      ],
    },
    {
      name: <a href="https://www.linkedin.com/company/altarix/">Altarix</a>,
      description: 'Компания, занимающаяся городскими сервисами, использующими BigData',
      position: 'frontend teamlead',
      period: { from: new Date(2016, 5), to: new Date(2020, 8) },
      responsibilities: [
        'Управление командой 3+ человек',
        'Создание макетов в Figma (пользуясь наработками штатных дизайнеров)',
        'Обучение коллег (курс по алгоритмам, доклады по технологиям)',
        'Проведение интервью',
      ],
      achivements: [
        'Вырастил 6 джунов в крепких мидлов/синьоров',
        'Довёл SCRUM до канонического вида с ретроспективами и обсуждениями (без фанатизма)',
        'Затащил TypeScript в проект',
        'Провёл более 50 интервью с кандидатами',
      ],
      stack: [ 'TS', 'ReactJS', 'NextJS', 'Redux (Redux-Thunk, Reselect)', 'Sass', 'Кастомная UI-система', 'Jest', 'Storybook' ],
      projects: [
        { name: 'pcs', value: 'Сервис персональных коммуникаций (email, sms, web)' },
        { name: 'lendings', value: 'Различного рода лендинги' },
      ],
    },
  ],
  educations: [
    {
      period: { from: new Date(2005,9), to: new Date(2014,6) },
      link: 'https://mipt.ru/education/departments/fivt.php',
      value: 'Факультет инноваций и высоких технологи - МФТИ',
    },

  ],
  courses: [
    {
      period: { from: new Date(2022,2), to: new Date(2022,4) },
      link: 'https://practicum.yandex.ru/promo/mentors-school',
      value: 'Школа менторов - Yandex Practicum',
    },
    {
      period: { from: new Date(2021,8), to: new Date(2022,2) },
      link: 'https://yandex.ru/yaintern/schools/frontend',
      value: 'Школа разработки интерфейсов - Яндекс',
    },
  ],
  publications: [
    {
      link: 'https://habr.com/ru/post/340146/',
      value: 'Пять простых шагов для понимания JSON Web Tokens (JWT)',
    },
    {
      link: 'https://habr.com/ru/post/466929/',
      value: 'Добавляем Refresh Token',
    },
    {
      link: 'https://habr.com/ru/articles/656995/',
      value: 'Тёмная тема в React с использованием css переменных в scss',
    },
    {
      link: 'https://habr.com/ru/post/720026/',
      value: 'Правила выживания начинающего программиста или как работает эффект Данинга-Крюгера',
    },
  ],
  about: `В программирование пришёл из любви к математике, а во фронтенд - из любви к дизайну. Дипломную работу писал по 3D визуализации трассировкой лучей, но в самом конце ушёл во фронтенд, что стало моим лучшим решением.
  Я интроверт, но умею находить общий язык со всеми. Очень ценю дружный коллектив, где все друг другу доверяют и помогают.
  Нравится заниматься образовательной деятельностью. Пишу статьи на хабре и веду телеграмм канал. Меня вдохновляет, когда получается объяснить сложные вещи просто. Хочется верить, что у меня это получается очень хорошо!
  `,
}

export default resume