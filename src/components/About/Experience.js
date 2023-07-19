import { useTranslation } from 'react-i18next'
import { education, experience } from '../../data/experience'
import Description from './Description'
import ModalImage from 'react-modal-image'

const Experience = () => {
  const { t, i18n } = useTranslation()

  return (
    <div className='w-[80%] mx-auto text-md text-left font-light my-16'>
      <div className='flex flex-col xl:flex-row gap-12'>
        <div className='basis-1/2'>
          <h2 className='text-3xl font-medium mb-8'>
            {t('about.experience.experience')}
          </h2>
          <div className='space-y-4'>
            {experience.map(
              ({
                id,
                jobTitle,
                companyName,
                location,
                startDate,
                endDate,
                image,
                summary,
              }) => (
                <div key={id}>
                  <div className='flex gap-4 items-start'>
                    <div className='basis-1/3 flex-shrink-0'>
                      <img
                        src={image}
                        alt={companyName}
                        className='aspect-[4/3] h-full w-full object-cover rounded-xl border-2 border-[#C4C3C3]'
                      />
                    </div>
                    <div className='w-full'>
                      <div>
                        <h4>
                          {startDate} -{' '}
                          {endDate || t('about.experience.present')}
                        </h4>
                        <h2 className='font-medium mb-2'>
                          {jobTitle[i18n.resolvedLanguage]}{' '}
                          {t('about.experience.at')} {companyName}
                        </h2>
                      </div>
                      <Description text={summary[i18n.resolvedLanguage]} />
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
        <div className='basis-1/2'>
          <h2 className='text-3xl font-medium mb-8'>
            {t('about.experience.education')}
          </h2>
          <div className='space-y-4 xl:max-h-[70vh] xl:overflow-y-scroll xl:pr-4'>
            {education.map(
              ({
                id,
                certificationName,
                description,
                certificateImage,
                organization,
                startDate,
                endDate,
                technologies,
                inProgress,
              }) => (
                <div key={id}>
                  <div className='flex gap-4 items-start'>
                    <div className='basis-1/3 flex-shrink-0'>
                      <ModalImage
                        small={certificateImage[i18n.resolvedLanguage]}
                        medium={certificateImage[i18n.resolvedLanguage]}
                        alt={certificationName[i18n.resolvedLanguage]}
                        className='aspect-[4/3] h-full w-full object-cover rounded-xl border-2 border-[#C4C3C3]'
                        imageBackgroundColor='#FFFFFF'
                        hideDownload
                        hideZoom
                      />
                    </div>
                    <div className='w-full'>
                      <div className='mb-2'>
                        <h4>
                          {startDate && `${startDate} - `}
                          {endDate || t('about.experience.present')}
                        </h4>
                        <h2 className='font-medium'>{organization}</h2>
                        <h3>
                          {certificationName[i18n.resolvedLanguage]}
                          {inProgress &&
                            ` (${t('about.experience.inProgress')})`}
                        </h3>
                      </div>

                      {/* <Description text={description.es} /> */}
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience
