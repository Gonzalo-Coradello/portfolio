import './Footer.css'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'

const Footer = () => {
  const { t } = useTranslation()

  return (
    <footer className='lg:pb-4'>
      <div className='lg:w-[80%] mx-auto grid items-center justify-center lg:grid-cols-3 gap-6 py-10 px-8 bg-white/20 backdrop-blur-sm rounded-lg shadow-xl mt-12'>
        <h2 className='text-xl font-light'>Gonzalo Coradello</h2>
        <div className='w-full max-w-[200px] mx-auto lg:order-3'>
          <div className='flex justify-around'>
            <a
              href='mailto:gonzalocoradello@gmail.com'
              className='w-fit hover:opacity-50 hover:scale-110 transition-all duration-200'
            >
              <FaEnvelope size={25} />
            </a>
            <a
              href='https://www.linkedin.com/in/gonzalo-coradello/'
              className='w-fit hover:opacity-50 hover:scale-110 transition-all duration-200'
            >
              <FaLinkedin size={25} />
            </a>
            <a
              href='https://github.com/Gonzalo-Coradello'
              className='w-fit hover:opacity-50 hover:scale-110 transition-all duration-200'
            >
              <FaGithub size={25} />
            </a>
          </div>
        </div>
        <div className='w-fit mx-auto text-md font-light col-1'>
          <ul className='flex gap-6 justify-center'>
            <li>
              <a
                href='/#'
                className='hover:opacity-50 transition-opacity duration-300 whitespace-nowrap'
              >
                {t('header.home')}
              </a>
            </li>
            <li>
              <a
                href='/#about'
                className='hover:opacity-50 transition-opacity duration-300 whitespace-nowrap'
              >
                {t('header.about')}
              </a>
            </li>
            <li className='hover:opacity-50 transition-opacity duration-300 whitespace-nowrap'>
              <a href='mailto:gonzalocoradello@gmail.com'>
                {t('header.contact')}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
