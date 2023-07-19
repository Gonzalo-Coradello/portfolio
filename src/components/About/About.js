import AboutBackground from '../AboutBackground/AboutBackground'
import AboutIntro from './AboutIntro'
import AboutInfo from './AboutInfo'
import Skills from './Skills'

const About = () => {
  return (
    <>
      <AboutBackground />
      <section className='max-w-[1200px] mx-auto px-10'>
        <AboutIntro />
        <AboutInfo />
        <Skills />
      </section>
    </>
  )
}

export default About
