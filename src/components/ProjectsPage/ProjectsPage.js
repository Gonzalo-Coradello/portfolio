import React from 'react'
import AboutBackground from '../AboutBackground/AboutBackground'
import { projects } from '../../data/projects'
import Project from '../Project/Project'
import { useTranslation } from 'react-i18next'

const ProjectsPage = () => {
  const { t } = useTranslation()
  return (
    <>
      <AboutBackground />
      <section className='max-w-[1200px] mx-auto px-10'>
        <h2 className='text-3xl mt-8 font-medium md:ml-8 mb-8'>
          {t('projects.heading')}
        </h2>
        <div className='flex flex-wrap gap-2 md:gap-4 lg:gap-8 justify-center items-center'>
          {projects.map(project => (
            <div key={project.id} className='max-w-[350px]'>
              <Project {...project} mainProject={true} />
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default ProjectsPage
