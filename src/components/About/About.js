import { IoLogoHtml5, IoLogoCss3 } from 'react-icons/io'
import {
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaSass,
  FaGitAlt,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaDocker,
  FaAngular,
  FaFigma,
} from 'react-icons/fa'
import {
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiBootstrap,
  SiFirebase,
  SiTypescript,
  SiMaterialui,
  SiRedux,
  SiStyledcomponents,
  SiMysql,
  SiNextdotjs,
  SiPrisma,
  SiPostgresql,
  SiSqlite,
  SiMicrosoftsqlserver,
  SiNestjs,
  SiCypress,
  SiJest,
  SiTestinglibrary,
  SiMocha,
  SiChai,
} from 'react-icons/si'
import Photo from './assets/foto-gonzalo.jpg'
import sqlLogo from './assets/file-type-sql.svg'
import SkillsIcon from './SkillsIcon'
import AboutBackground from '../AboutBackground/AboutBackground'
import { useTranslation } from 'react-i18next'

// React Native

export const icons = [
  { label: 'React', icon: <FaReact size={50} className='w-8 md:w-auto' /> },
  {
    label: 'React Native',
    icon: <FaReact size={50} className='w-8 md:w-auto' />,
  },
  {
    label: 'Next.js',
    icon: <SiNextdotjs size={50} className='w-8 md:w-auto' />,
  },
  {
    label: 'Angular',
    icon: <FaAngular size={50} className='w-8 md:w-auto' />,
  },
  { label: 'Node.js', icon: <FaNodeJs size={50} className='w-8 md:w-auto' /> },
  { label: 'Express', icon: <SiExpress size={50} className='w-8 md:w-auto' /> },
  {
    label: 'Nest.js',
    icon: <SiNestjs size={50} className='w-8 md:w-auto' />,
  },
  {
    label: 'JavaScript',
    icon: <FaJsSquare size={50} className='w-8 md:w-auto' />,
  },
  {
    label: 'TypeScript',
    icon: <SiTypescript size={50} className='w-8 md:w-auto' />,
  },
  { label: 'MongoDB', icon: <SiMongodb size={50} className='w-8 md:w-auto' /> },
  { label: 'Redux', icon: <SiRedux size={50} className='w-8 md:w-auto' /> },
  {
    label: 'Firebase',
    icon: <SiFirebase size={50} className='w-8 md:w-auto' />,
  },
  { label: 'Prisma', icon: <SiPrisma size={50} className='w-8 md:w-auto' /> },
  { label: 'MySQL', icon: <SiMysql size={50} className='w-8 md:w-auto' /> },
  {
    label: 'PostgreSQL',
    icon: <SiPostgresql size={50} className='w-8 md:w-auto' />,
  },
  {
    label: 'SQL Server',
    icon: <SiMicrosoftsqlserver size={50} className='w-8 md:w-auto' />,
  },
  { label: 'SQLite', icon: <SiSqlite size={50} className='w-8 md:w-auto' /> },
  { label: 'HTML', icon: <IoLogoHtml5 size={50} className='w-8 md:w-auto' /> },
  { label: 'CSS', icon: <IoLogoCss3 size={50} className='w-8 md:w-auto' /> },

  {
    label: 'TailwindCSS',
    icon: <SiTailwindcss size={50} className='w-8 md:w-auto' />,
  },
  { label: 'Sass', icon: <FaSass size={50} className='w-8 md:w-auto' /> },
  {
    label: 'Bootstrap',
    icon: <SiBootstrap size={50} className='w-8 md:w-auto' />,
  },
  { label: 'MUI', icon: <SiMaterialui size={50} className='w-8 md:w-auto' /> },
  {
    label: 'styled components',
    icon: <SiStyledcomponents size={50} className='w-8 md:w-auto' />,
  },
  { label: 'Docker', icon: <FaDocker size={50} className='w-8 md:w-auto' /> },
  { label: 'Jest', icon: <SiJest size={50} className='w-8 md:w-auto' /> },
  {
    label: 'Testing Library',
    icon: <SiTestinglibrary size={50} className='w-8 md:w-auto' />,
  },
  { label: 'Cypress', icon: <SiCypress size={50} className='w-8 md:w-auto' /> },
  { label: 'Mocha', icon: <SiMocha size={50} className='w-8 md:w-auto' /> },
  { label: 'Chai', icon: <SiChai size={50} className='w-8 md:w-auto' /> },
  { label: 'Git', icon: <FaGitAlt size={50} className='w-8 md:w-auto' /> },
  { label: 'Github', icon: <FaGithub size={50} className='w-8 md:w-auto' /> },
  { label: 'Figma', icon: <FaFigma size={50} className='w-8 md:w-auto' /> },
]

const mainIcons = [
  {
    label: 'JavaScript',
    icon: <FaJsSquare size={50} className='w-8 md:w-auto' />,
  },
  {
    label: 'TypeScript',
    icon: <SiTypescript size={50} className='w-8 md:w-auto' />,
  },
  { label: 'HTML', icon: <IoLogoHtml5 size={50} className='w-8 md:w-auto' /> },
  { label: 'CSS', icon: <IoLogoCss3 size={50} className='w-8 md:w-auto' /> },
  { label: 'MongoDB', icon: <SiMongodb size={50} className='w-8 md:w-auto' /> },
  { label: 'Express', icon: <SiExpress size={50} className='w-8 md:w-auto' /> },
  { label: 'React', icon: <FaReact size={50} className='w-8 md:w-auto' /> },
  { label: 'Node.js', icon: <FaNodeJs size={50} className='w-8 md:w-auto' /> },
  {
    label: 'React Native',
    icon: <FaReact size={50} className='w-8 md:w-auto' />,
  },
  {
    label: 'Next.js',
    icon: <SiNextdotjs size={50} className='w-8 md:w-auto' />,
  },
  { label: 'Redux', icon: <SiRedux size={50} className='w-8 md:w-auto' /> },
  {
    label: 'Angular',
    icon: <FaAngular size={50} className='w-8 md:w-auto' />,
  },
  {
    label: 'Nest.js',
    icon: <SiNestjs size={50} className='w-8 md:w-auto' />,
  },
  {
    label: 'Firebase',
    icon: <SiFirebase size={50} className='w-8 md:w-auto' />,
  },
  {
    label: 'SQL',
    icon: <img src={sqlLogo} alt='sql' width={50} height={50} />,
  },
  { label: 'Docker', icon: <FaDocker size={50} className='w-8 md:w-auto' /> },
  { label: 'Git', icon: <FaGitAlt size={50} className='w-8 md:w-auto' /> },
  { label: 'Github', icon: <FaGithub size={50} className='w-8 md:w-auto' /> },
  { label: 'Figma', icon: <FaFigma size={50} className='w-8 md:w-auto' /> },
]

const About = () => {
  const { t } = useTranslation()

  return (
    <>
      <AboutBackground />
      <section className='max-w-[1200px] mx-auto px-10'>
        <div>
          <div className='flex flex-col mt-10 mb-12 gap-12 justify-center items-end md:flex-row md:gap-24 md:mt-20 md:mb-20'>
            <div className='basis-1/6 flex gap-16 md:gap-6 md:flex-col'>
              <div className='rounded-full aspect-square overflow-hidden w-3/4 mx-auto md:w-full'>
                <img
                  src={Photo}
                  alt=''
                  className='object-cover h-full max-h-[400px] grayscale hover:grayscale-0 hover:scale-110 active:grayscale-0 active:scale-110 transition-all duration-500'
                />
              </div>
              <div className='flex flex-col md:flex-row justify-around md:justify-between'>
                <a
                  href='mailto:gonzalocoradello@gmail.com'
                  className='hover:opacity-50 hover:scale-110 transition-all duration-200'
                >
                  <FaEnvelope size={30} />
                </a>
                <a
                  href='https://www.linkedin.com/in/gonzalo-coradello/'
                  className='hover:opacity-50 hover:scale-110 transition-all duration-200'
                >
                  <FaLinkedin size={30} />
                </a>
                <a
                  href='https://github.com/Gonzalo-Coradello'
                  className='hover:opacity-50 hover:scale-110 transition-all duration-200'
                >
                  <FaGithub size={30} />
                </a>
              </div>
            </div>
            <div className='grid h-full gap-4 md:gap-16'>
              <p className='text-left md:max-w-[30ch] font-light'>
                {t('about.part1')}
              </p>
              <a
                href={t('about.url')}
                target='_blank'
                rel='noopener noreferrer'
                className='py-2 px-6 w-full mx-auto bg-white/10 backdrop-blur-sm rounded-lg shadow-md hover:opacity-50 transition-all duration-200'
              >
                {t('about.cv')}
              </a>
            </div>
          </div>

          <div className='text-left font-light max-w-[800px] mx-auto mb-12'>
            <h2 className='text-3xl font-medium md:ml-8 mb-4'>
              {t('about.heading')}
            </h2>
            <div className='grid gap-4 py-6 px-4 bg-white/10 backdrop-blur-sm rounded-lg shadow-md md:py-12 md:px-8 leading-relaxed'>
              <p>{t('about.part2')}</p>
              <p>{t('about.part3')}</p>
              <p>{t('about.part4')}</p>
              <p>{t('about.part5')}</p>
            </div>
          </div>
        </div>

        <div className='max-w-[800px] mx-auto mb-4'>
          <h2 className='text-left text-3xl font-medium mb-8 md:ml-8'>
            {t('about.skills')}
          </h2>
          <div className='grid grid-cols-3 md:grid-cols-4 gap-6 md:gap-10 justify-items-center py-12 px-8 bg-white/10 backdrop-blur-sm rounded-lg shadow-md'>
            {mainIcons.map(i => (
              <SkillsIcon label={i.label} icon={i.icon} key={i.label} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default About
