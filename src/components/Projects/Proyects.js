import './Projects.css'
import Project from '../Project/Project'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

const Projects = ({ projects }) => {

    const [ isActive, setIsActive ] = useState({project1: true, project2: false})
    const { t } = useTranslation()

    const [ order, setOrder ] = useState({project1: 0, project2: 1, project3: 2})

    const handleChange = (project) => {

        if(project === 'project1') setOrder({project1: 0, project2: 1, project3: 2})
        if(project === 'project2') setOrder({project2: 0, project3: 1, project1: 2})
        if(project === 'project3') setOrder({project3: 0, project1: 1, project2: 2})

        console.log(order)

        setIsActive(prev => {
            
            Object.keys(prev).forEach(key => prev[key] = false)
            
            const newObj = {
                ...prev,
                [project]: true
            }

            
            return newObj
        })
    }

    return (
        <section className="lg:h-[80vh] py-0" id="projects">
            <h2 className='font-medium text-2xl md:text-3xl md:mb-8'>{t('projects.heading')}</h2>
            <div className='grid lg:grid-cols-3 lg:grid-rows-1 items-center content-center lg:min-h-[80%] mt-4 relative'>
                <div>
                    <p className="projectsGradient relative w-fit text-center mx-auto text-2xl lg:col-span-2 md:text-4xl font-medium lg:ml-4 mt-8 pl-2 lg:mt-0 w-fit lg:pl-4 lg:text-left">
                        delivering<br />
                        <span className='span'>beautiful & efficient</span><br />
                        <span>experiences</span>
                    </p>
                </div>
                <div className='projectsContainer w-full h-full lg:col-span-2'>
                    <div className={`${isActive['project1'] ? `project project1 active order${order.project1}` : `project project1 order${order.project1}`}`} onClick={() => handleChange('project1')}>
                        <Project {...projects[0]} mainProject={isActive['project1']} />
                    </div>
                    <div className={`${isActive['project2'] ? `project project2 active order${order.project2}` : `project project2 order${order.project2}`}`} onClick={() => handleChange('project2')}>
                        <Project {...projects[1]} mainProject={isActive['project2']} />
                    </div>
                    <div className={`${isActive['project3'] ? `project project3 active order${order.project3}` : `project project3 order${order.project3}`}`} onClick={() => handleChange('project3')}>
                        <Project {...projects[2]} mainProject={isActive['project3']} />
                    </div>
                </div>
            </div>
                {/* { projects.map(project => <input type="radio" name="slider" id={project.id} key={`input${project.id}`} defaultChecked={project.id === projects[0].id ? true : false} />) } */}
        </section>
    )
}

export default Projects