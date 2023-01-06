import './Projects.css'
import Project from '../Project/Project'
import { useState, useEffect } from 'react'
import { wrapGrid } from 'animate-css-grid'

const Projects = ({ projects }) => {

    const [ isActive, setIsActive ] = useState({project1: true, project2: false})

    useEffect(() => {
        const gridContainer = document.querySelector('.projectsContainer');
        wrapGrid(gridContainer, {duration: 500, easing: 'linear'});
    }, [])

    const handleChange = (project) => {
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
        <section className="md:h-[80vh] mb-10 py-0 mt-20 md:mb-0" id="projects">
            <h2 className='font-medium text-3xl'>My works</h2>
            <div className='projectsContainer grid md:grid-cols-3 items-center content-center h-[80%] mt-4 relative'>
                <div>
                    <p className="projectsGradient text-3xl md:text-4xl font-medium text-left ml-4 mt-8 md:mt-0 w-fit md:pl-4">
                        delivering<br />
                        <span className='span'>beautiful & efficient</span><br />
                        <span>experiences</span>
                    </p>
                </div>
                <div className={isActive['project1'] ? 'project project1 active' : 'project project1'} onClick={() => handleChange('project1')}>
                    <Project {...projects[0]} mainProject={isActive['project1']} />
                </div>
                <div className={isActive['project2'] ? 'project project2 active' : 'project project2'} onClick={() => handleChange('project2')}>
                    <Project {...projects[1]} mainProject={isActive['project2']} />
                </div>
            </div>
                {/* { projects.map(project => <input type="radio" name="slider" id={project.id} key={`input${project.id}`} defaultChecked={project.id === projects[0].id ? true : false} />) } */}
        </section>
    )
}

export default Projects