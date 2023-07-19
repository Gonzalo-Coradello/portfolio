import { useTranslation } from 'react-i18next'

const AboutInfo = () => {
  const { t } = useTranslation()

  return (
    <div className='w-[80%] text-left font-light max-w-[800px] mx-auto mb-12'>
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
  )
}

export default AboutInfo
