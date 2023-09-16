import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'

const AboutIntro = () => {
  const { t } = useTranslation()

  return (
    <div className='max-w-[1200px] mx-auto px-10'>
      <div className='flex flex-col mt-10 mb-12 gap-12 justify-center items-end md:flex-row md:gap-24 md:mt-20 md:mb-20'>
        <div className='basis-1/6 flex gap-16 md:gap-6 md:flex-col'>
          <div className='rounded-full aspect-square overflow-hidden w-3/4 mx-auto md:w-full'>
            <img
              src='/images/foto-gonzalo.jpg'
              alt='Gonzalo'
              className='object-cover h-full max-h-[400px]  hover:scale-110  active:scale-110 transition-all duration-500'
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
    </div>
  )
}

export default AboutIntro
