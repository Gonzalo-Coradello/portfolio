import { useTranslation } from 'react-i18next'

const AboutInfo = () => {
  const { t } = useTranslation()

  return (
    <section
      id='about'
      className='w-full md:w-[80%] text-left font-light max-w-full md:max-w-[670px] mx-auto mb-12 mt-8 pt-0'
    >
      <h2 className='text-3xl font-medium mb-4 text-center md:text-left'>
        {t('about.heading')}
      </h2>
      <div className='grid gap-4 py-6 px-4 bg-white/10 backdrop-blur-sm rounded-lg shadow-md md:py-12 md:px-8 leading-relaxed'>
        {t('about.description')
          .split('\n')
          .map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
      </div>
    </section>
  )
}

export default AboutInfo
