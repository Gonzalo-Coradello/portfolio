import AboutBackground from '../AboutBackground/AboutBackground'
import AboutIntro from './AboutIntro'
import AboutInfo from './AboutInfo'
import Skills from './Skills'
import Experience from './Experience'

const About = () => {
  return (
    <>
      <AboutBackground />
      <section className='mx-auto px-0'>
        <AboutIntro />
        <AboutInfo />
        <Experience />
        <Skills />
      </section>
    </>
  )
}

export default About
