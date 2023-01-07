import { IoLogoHtml5, IoLogoCss3 } from 'react-icons/io'
import { FaJsSquare, FaReact, FaNodeJs, FaSass, FaGitAlt, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { SiExpress, SiMongodb, SiTailwindcss, SiBootstrap, SiFirebase, SiTypescript } from 'react-icons/si'
import Photo from './assets/foto-gonzalo.jpg'
import SkillsIcon from './SkillsIcon'
import AboutBackground from '../AboutBackground/AboutBackground'

const About = () => {
    return (
        <>
            <AboutBackground />
            <section className='max-w-[1200px] mx-auto px-10'>
                <div>
                    <div className='flex flex-col md:flex-row gap-12 justify-center items-center md:gap-24 min-h-[70vh] mb-8 md:h-[85vh]'>
                        <div className='basis-1/6 flex gap-16 md:gap-6 md:flex-col'>
                            <div className='rounded-full aspect-square overflow-hidden w-3/4 mx-auto md:w-full'>
                                <img src={Photo} alt='' className='object-cover h-full max-h-[400px]' />
                            </div>
                            <div className='flex flex-col md:flex-row justify-around md:justify-between'>
                                <a href='mailto:gonzalocoradello@gmail.com' className='hover:opacity-50 hover:scale-110 transition-all duration-200'><FaEnvelope size={30} /></a>
                                <a href='https://www.linkedin.com/in/gonzalo-coradello/' className='hover:opacity-50 hover:scale-110 transition-all duration-200'><FaLinkedin size={30} /></a>
                                <a href='https://github.com/Gonzalo-Coradello' className='hover:opacity-50 hover:scale-110 transition-all duration-200'><FaGithub size={30} /></a>
                            </div>
                        </div>
                        <div className='text-left'>
                            <h2 className='text-2xl font-medium'>About me</h2>
                            <p className='md:max-w-[30ch] font-light'>Soy un desarrollador Full-Stack disponible para trabajos de tiempo completo, medio tiempo y proyectos freelance.</p>
                            {/* <p className='md:max-w-[30ch] font-light'>I'm a Full Stack Developer available for freelance projects, full-time and part-time jobs.</p> */}
                        </div>
                    </div>
                    <div className='md:min-h-[85vh] mb-12'>
                        <div className='text-left font-light w-fit mx-auto grid gap-8 py-6 px-4 bg-white/10 backdrop-blur-sm rounded-lg shadow-md md:py-12 md:px-8 '>
                            <p className='md:max-w-[55ch] mx-auto'>Soy Gonzalo Coradello, desarrollador web orientado al Front-End. Tengo 23 años y vivo en Pergamino, Bs. As. Soy profesor de música y técnico multimedial. Los últimos años estuve trabajando como docente mientras avanzaba con la carrera.</p>
                            <p className='md:max-w-[55ch] mx-auto'>Siempre amé la tecnología. Descubrí la programación hace poco tiempo y me enamoré de las amplias posibilidades que brinda este campo. Empecé a programar en abril del 2022 y desde entonces me esfuerzo cada día por mejorar, aprendiendo nuevas tecnologías, mejorando mis habilidades y creando proyectos. Tengo claro que mi objetivo es dedicarme a la programación a nivel profesional.</p>
                            <p className='md:max-w-[55ch] mx-auto'>Me apasiona aprender, crear soluciones y hacer realidad proyectos.</p>
                        </div>
                    </div>
                </div>
                <div className='max-w-[800px] mx-auto mb-4'>
                    <h2 className='text-left text-3xl font-medium mb-8 md:ml-8'>My skillset</h2>
                    <div className=' grid grid-cols-3 md:grid-cols-4 gap-6 md:gap-10 justify-items-center py-12 px-8 bg-white/10 backdrop-blur-sm rounded-lg shadow-md'>
                        <SkillsIcon label='HTML'><IoLogoHtml5 size={50} className='w-8 md:w-auto'/></SkillsIcon>
                        <SkillsIcon label='CSS'><IoLogoCss3 size={50} className='w-8 md:w-auto'/></SkillsIcon>
                        <SkillsIcon label='JavaScript'><FaJsSquare size={50} className='w-8 md:w-auto'/></SkillsIcon>
                        <SkillsIcon label='ReactJS'><FaReact size={50} className='w-8 md:w-auto'/></SkillsIcon>
                        <SkillsIcon label='TypeScript'><SiTypescript size={50} className='w-8 md:w-auto'/></SkillsIcon>
                        <SkillsIcon label='TailwindCSS'><SiTailwindcss size={50} className='w-8 md:w-auto'/></SkillsIcon>
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