import Projects from "../Projects/Proyects"

const projects = [
    {
        id: 1,
        name: 'zara for men',
        img: '/images/zara-for-men.jpg',
        description: 'Description'
    },
    {
        id: 2,
        name: 'blackcoffee',
        img: '/images/blackcoffee.jpg',
        description: 'description'
    },
    {
        id: 3,
        name: 'Otro',
        img: '/images/zara-for-men.jpg',
        description: 'description'
    }
]

const ProjectsContainer = () => {
    
    return <Projects projects={projects} />
}

export default ProjectsContainer