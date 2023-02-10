import { IoLogoHtml5, IoLogoCss3 } from 'react-icons/io'
import { FaJsSquare, FaReact, FaNodeJs, FaSass, FaGitAlt, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { SiExpress, SiMongodb, SiTailwindcss, SiBootstrap, SiFirebase, SiTypescript, SiMaterialui } from 'react-icons/si'
import Photo from './assets/foto-gonzalo.jpg'
import SkillsIcon from './SkillsIcon'
import AboutBackground from '../AboutBackground/AboutBackground'
import { useTranslation } from 'react-i18next'

const About = () => {

    const { t } = useTranslation()

    return (
        <>
            <AboutBackground />
            <section className='max-w-[1200px] mx-auto px-10'>
                <div>
                    <div className='flex flex-col md:flex-row gap-12 justify-center items-center md:gap-24 my-20'>
                        <div className='basis-1/6 flex gap-16 md:gap-6 md:flex-col'>
                            <div className='rounded-full aspect-square overflow-hidden w-3/4 mx-auto md:w-full'>
                                <img src={Photo} alt='' className='object-cover h-full max-h-[400px] grayscale hover:grayscale-0 hover:scale-110 active:grayscale-0 active:scale-110 transition-all duration-500' />
                            </div>
                            <div className='flex flex-col md:flex-row justify-around md:justify-between'>
                                <a href='mailto:gonzalocoradello@gmail.com' className='hover:opacity-50 hover:scale-110 transition-all duration-200'><FaEnvelope size={30} /></a>
                                <a href='https://www.linkedin.com/in/gonzalo-coradello/' className='hover:opacity-50 hover:scale-110 transition-all duration-200'><FaLinkedin size={30} /></a>
                                <a href='https://github.com/Gonzalo-Coradello' className='hover:opacity-50 hover:scale-110 transition-all duration-200'><FaGithub size={30} /></a>
                            </div>
                        </div>
                        <div>
                            <p className='text-left md:max-w-[30ch] font-light'>{t('about.part1')}</p>
                            {/* <p className='md:max-w-[30ch] font-light'>I'm a Full Stack Developer available for freelance projects, full-time and part-time jobs.</p> */}
                        </div>
                    </div>
                    <div className='text-left font-light w-fit mx-auto mb-12'>
                        <h2 className='text-2xl font-medium mb-4'>{t('about.heading')}</h2>
                        <div className='grid gap-4 py-6 px-4 bg-white/10 backdrop-blur-sm rounded-lg shadow-md md:py-12 md:px-8 leading-relaxed'>
                            <p className='md:max-w-[60ch]'>{t('about.part2')}</p>
                            <p className='md:max-w-[60ch]'>{t('about.part3')}</p>
                            <p className='md:max-w-[60ch]'>{t('about.part4')}</p>
                            <p className='md:max-w-[60ch]'>{t('about.part5')}</p>
                        </div>
                    </div>
                </div>
                <div className='max-w-[800px] mx-auto mb-4'>
                    <h2 className='text-left text-3xl font-medium mb-8 md:ml-8'>{t('about.skills')}</h2>
                    <div className=' grid grid-cols-3 md:grid-cols-4 gap-6 md:gap-10 justify-items-center py-12 px-8 bg-white/10 backdrop-blur-sm rounded-lg shadow-md'>
                        <SkillsIcon label='HTML'><IoLogoHtml5 size={50} className='w-8 md:w-auto'/></SkillsIcon>
                        <SkillsIcon label='CSS'><IoLogoCss3 size={50} className='w-8 md:w-auto'/></SkillsIcon>
                        <SkillsIcon label='JavaScript'><FaJsSquare size={50} className='w-8 md:w-auto'/></SkillsIcon>
                        <SkillsIcon label='ReactJS'><FaReact size={50} className='w-8 md:w-auto'/></SkillsIcon>
                        <SkillsIcon label='TypeScript'><SiTypescript size={50} className='w-8 md:w-auto'/></SkillsIcon>
                        <SkillsIcon label='TailwindCSS'><SiTailwindcss size={50} className='w-8 md:w-auto'/></SkillsIcon>
                        <SkillsIcon label='MUI'><SiMaterialui size={50} className='w-8 md:w-auto'/></SkillsIcon>
                        <SkillsIcon label='Sass'><FaSass size={50} className='w-8 md:w-auto'/></SkillsIcon>
                        <SkillsIcon label='Bootstrap'><SiBootstrap size={50} className='w-8 md:w-auto'/></SkillsIcon>
                        <SkillsIcon label='NodeJS'><FaNodeJs size={50} className='w-8 md:w-auto'/></SkillsIcon>
                        <SkillsIcon label='ExpressJS'><SiExpress size={50} className='w-8 md:w-auto'/></SkillsIcon>
                        <SkillsIcon label='MongoDB'><SiMongodb size={50} className='w-8 md:w-auto'/></SkillsIcon>
                        <SkillsIcon label='Firebase'><SiFirebase size={50} className='w-8 md:w-auto'/></SkillsIcon>
                        <SkillsIcon label='Git'><FaGitAlt size={50} className='w-8 md:w-auto'/></SkillsIcon>
                        <SkillsIcon label='Github'><FaGithub size={50} className='w-8 md:w-auto'/></SkillsIcon>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About