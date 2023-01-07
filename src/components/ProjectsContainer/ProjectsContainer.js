import Projects from "../Projects/Proyects"

const projects = [
    {
        id: 1,
        name: 'zara for men',
        img: '/images/zara-for-men.jpg',
        description: 'E-commerce inspirado en la marca de indumentaria Zara. Desarrollado con React y CSS, con base de datos en Firebase.',
        url: 'https://zara-for-men.vercel.app'
    },
    {
        id: 2,
        name: 'blackcoffee',
        img: '/images/blackcoffee.jpg',
        description: 'E-commerce de una marca ficticia llamada Black Coffee, especializada en café. Desarrollado con HTML, CSS y JavaScript.',
        url: 'https://blackcoffee-store.netlify.app/'
    },
    {
        id: 3,
        name: 'Otro',
        img: '/images/zara-for-men.jpg',
        description: 'description'
    },
    {
        id: 4,
        name: 'otro mas',
        img: '/images/blackcoffee.jpg',
        description: 'description'
    },
    {
        id: 5,
        name: 'el ultimo',
        img: '/images/blackcoffee.jpg',
        description: 'description'
    }
]

const ProjectsContainer = () => {
    
    return <Projects projects={projects} />
}

export default ProjectsContainer