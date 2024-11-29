import './Hero.css'
import { BsChevronCompactDown } from 'react-icons/bs'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'

const Hero = () => {
  const { t } = useTranslation()

  const [scroll, setScroll] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY > 50)
    })
  }, [])

  return (
    <section className='hero h-[80vh] mb-[20vh] md:h-[90vh] md:mb-[10vh] md:w-[70%] grid md:items-center max-w-[1200px] mx-auto'>
      <div className='flex flex-col-reverse justify-center gap-6 md:flex-row md:justify-between md:items-center md:gap-24'>
        <div className='grid justify-center text-left items-center gap-6'>
          <h2 className='font-medium text-4xl lg:text-5xl mt-auto leading-[1.25] w-max'>
            {t('hero.part1')}
            <br />
            {t('hero.part2')} <span className='gradient'>&lt;Gonzalo&gt;</span>
          </h2>
          <p className='font-light text-lg md:text-lg max-w-[35ch] mb-auto leading-7 md:leading-6'>
            <span className='font-medium'>{t('title')}</span>{' '}
            {t('presentation')}
          </p>
          <a
            href='mailto:gonzalocoradello@gmail.com'
            className='w-fit font-light bg-white/30 z-10 backdrop-blur-sm rounded-lg shadow-md px-8 py-3 hover:opacity-80 hover:scale-105 active:opacity-50 transition-all duration-300 mx-auto md:mx-0'
          >
            {t('hero.button')}
          </a>
        </div>
        <div className='flex gap-4 mx-auto md:mx-0 justify-center md:flex-col'>
          <div className='relative rounded-full aspect-square overflow-hidden w-3/4 max-w-[160px] md:max-w-[240px] mx-auto md:w-full'>
            <img
              src='/images/foto-gonzalo.jpg'
              alt='Gonzalo'
              width={400}
              height={400}
              className='relative object-cover h-full max-h-[400px] grayscale hover:grayscale-0 hover:scale-110 active:grayscale-0 active:scale-110 transition-all duration-500'
            />
          </div>
          <div className='flex flex-col gap-4 md:px-8 md:flex-row justify-around md:justify-between'>
            <a
              href='mailto:gonzalocoradello@gmail.com'
              className='hover:opacity-50 hover:scale-110 transition-all duration-200'
            >
              <FaEnvelope size={28} />
            </a>
            <a
              href='https://www.linkedin.com/in/gonzalo-coradello/'
              className='hover:opacity-50 hover:scale-110 transition-all duration-200'
            >
              <FaLinkedin size={28} />
            </a>
            <a
              href='https://github.com/Gonzalo-Coradello'
              className='hover:opacity-50 hover:scale-110 transition-all duration-200'
            >
              <FaGithub size={28} />
            </a>
          </div>
        </div>
      </div>
      <a
        href='#experience'
        className={`hidden text-lg fixed bottom-0 left-0 right-0 md:flex justify-center flex-col w-fit mx-auto mb-6 md:mb-4 hover:opacity-50 transition-opacity duration-300 ${
          scroll ? 'fade' : null
        }`}
      >
        <p>{t('hero.part3')}</p>
        <BsChevronCompactDown
          size={35}
          className={`mx-auto arrowAnimation z-[500]`}
        />
      </a>
    </section>
  )
}

export default Hero
