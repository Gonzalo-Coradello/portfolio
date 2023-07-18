import './Projects.css'
import Project from '../Project/Project'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

const Projects = ({ projects }) => {
  const [isActive, setIsActive] = useState({
    project1: true,
    project2: false,
    project3: false,
    project4: false,
    project5: false,
    project6: false,
  })
  const { t } = useTranslation()

  const [order, setOrder] = useState({
    project1: 0,
    project2: 1,
    project3: 2,
    project4: 3,
    project5: 4,
    project6: 5,
  })

  const handleChange = project => {
    if (project === 'project1')
      setOrder({
        project1: 0,
        project2: 1,
        project3: 2,
        project4: 3,
        project5: 4,
        project6: 5,
        project7: 6,
      })
    if (project === 'project2')
      setOrder({
        project2: 0,
        project3: 1,
        project4: 2,
        project5: 3,
        project6: 4,
        project7: 5,
        project1: 6,
      })
    if (project === 'project3')
      setOrder({
        project3: 0,
        project4: 1,
        project5: 2,
        project6: 3,
        project7: 4,
        project1: 5,
        project2: 6,
      })
    if (project === 'project4')
      setOrder({
        project4: 0,
        project5: 1,
        project6: 2,
        project7: 3,
        project1: 4,
        project2: 5,
        project3: 6,
      })
    if (project === 'project5')
      setOrder({
        project5: 0,
        project6: 1,
        project7: 2,
        project1: 3,
        project2: 4,
        project3: 5,
        project4: 6,
      })
    if (project === 'project6')
      setOrder({
        project6: 0,
        project7: 1,
        project1: 2,
        project2: 3,
        project3: 4,
        project4: 5,
        project5: 6,
      })

    setIsActive(prev => {
      Object.keys(prev).forEach(key => (prev[key] = false))

      const newObj = {
        ...prev,
        [project]: true,
      }

      return newObj
    })
  }

  return (
    <section className='lg:h-[80vh] py-0' id='projects'>
      <h2 className='font-medium text-2xl md:text-3xl md:mb-8'>
        {t('projects.heading')}
      </h2>
      <div className='grid lg:grid-cols-3 lg:grid-rows-1 items-center content-center lg:min-h-[80%] mt-4 relative'>
        <div>
          <p className='projectsGradient relative w-fit text-center mx-auto text-2xl lg:col-span-2 xl:text-4xl md:text-3xl font-medium lg:ml-4 mt-8 pl-2 lg:mt-0 lg:pl-4 lg:text-left'>
            delivering
            <br />
            <span className='span whitespace-nowrap'>
              beautiful & efficient
            </span>
            <br />
            <span>experiences</span>
          </p>
        </div>

        <div className='projectsContainer w-full h-full lg:col-span-2'>
          {projects
            .filter(project => project.important)
            .map((project, idx) => (
              <div
                key={project.id}
                className={`${
                  isActive[`project${idx + 1}`]
                    ? `project active order0`
                    : `project order${order[`project${idx + 1}`]}`
                }`}
                onClick={() => handleChange(`project${idx + 1}`)}
              >
                <Project
                  {...project}
                  mainProject={isActive[`project${idx + 1}`]}
                />
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
