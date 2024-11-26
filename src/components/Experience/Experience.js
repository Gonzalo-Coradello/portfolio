import React from 'react'
import { experience } from '../../data/experience'
import { useTranslation } from 'react-i18next'
import ZergexProjects from './ZergexProjects'
import Description from '../About/Description'
import { icons } from '../../data/icons'

export default function Experience() {
  const { t, i18n } = useTranslation()

  return (
    <section id='experience' className='py-0'>
      <div className='w-[95%] mx-auto text-md text-left font-light my-16'>
        <div className='flex flex-col xl:flex-row gap-12 justify-center'>
          <div>
            <h2 className='text-3xl font-medium mb-8 text-center md:text-left'>
              {t('about.experience.experience')}
            </h2>
            <div className='space-y-16'>
              {experience.map(
                ({
                  id,
                  jobTitle,
                  companyName,
                  location,
                  startDate,
                  endDate,
                  imageSmall,
                  summary,
                  technologies,
                }) => (
                  <div
                    key={id}
                    className='rounded-lg p-px bg-gradient-to-r from-[rgb(236,188,238)] to-[rgb(71,138,201)] mt-8'
                  >
                    <div
                      key={id}
                      className='bg-white z-10 backdrop-blur-sm rounded-[7px] shadow-md px-10 py-4'
                    >
                      <div>
                        <div className='w-full grid gap-4'>
                          <div className='flex flex-col items-center'>
                            <h4 className='font-light text-sm md:ml-auto mb-2 text-center md:text-left'>
                              {startDate} -{' '}
                              {endDate || t('about.experience.present')}
                            </h4>
                            {imageSmall && (
                              <div className='my-2'>
                                <img
                                  src={imageSmall}
                                  alt={companyName}
                                  className='mx-auto w-[150px] h-full aspect-[5/3] object-cover rounded-xl'
                                />
                              </div>
                            )}
                            <h2 className='font-medium leading-5 text-center md:text-left'>
                              {jobTitle[i18n.resolvedLanguage]}
                            </h2>
                            <h3 className='font-medium mt-2'>{companyName}</h3>
                          </div>
                          {companyName === 'Zergex' && <ZergexProjects />}
                          <div className='max-w-[620px] mx-auto'>
                            <Description
                              text={summary[i18n.resolvedLanguage]}
                              maxCh={300}
                            />
                          </div>
                          {technologies.length > 0 && (
                            <div className='grid w-full max-w-[620px] mx-auto grid-cols-3 gap-x-6 gap-y-2 justify-between sm:grid-cols-4 md:grid-cols-6'>
                              {technologies.map(tech => (
                                <div key={tech}>
                                  <ExperienceIcon
                                    label={tech}
                                    icon={
                                      icons.find(i => i.label === tech)?.icon
                                    }
                                  />
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const ExperienceIcon = ({ label, icon }) => {
  return (
    <div className='grid gap-3 relative font-light text-[13px] text-center hover:scale-110 active:scale-110 transition-all duration-300'>
      <div className='max-w-[24px] h-6 mx-auto'>{icon}</div>
      <p className='leading-[14px] mt-1'>{label}</p>
    </div>
  )
}
