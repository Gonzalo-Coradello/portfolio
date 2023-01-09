import Projects from "../Projects/Proyects"

export const projects = [
    {
        id: 1,
        name: 'zara for men',
        img: '/images/zara-for-men.jpg',
        description: {
            es: 'E-commerce inspirado en la marca de indumentaria Zara. Desarrollado con React y CSS, con base de datos en Firebase.',
            en: 'E-commerce inspired by the brand Zara. Developed with React and CSS, with Firebase database.',
        },
        url: 'https://zara-for-men.vercel.app'
    },
    {
        id: 2,
        name: 'blackcoffee',
        img: '/images/blackcoffee.jpg',
        description: {
            es: 'E-commerce de una marca ficticia llamada Black Coffee, especializada en café. Desarrollado con HTML, CSS y JavaScript.',
            en: 'E-commerce for a fictional coffee brand called Black Coffee. Developed with HTML, CSS and JavaScript.',
        },
        url: 'https://blackcoffee-store.netlify.app/'
    },
    {
        id: 3,
        name: 'Prueba',
        img: '/images/zara-for-men.jpg',
        description: {
            es: 'E-commerce inspirado en la marca de indumentaria Zara. Desarrollado con React y CSS, con base de datos en Firebase.',
            en: 'E-commerce inspired by the brand Zara. Developed with React and CSS, with Firebase database.',
        },
        url: 'https://zara-for-men.vercel.app'
    },
    {
        id: 2,
        name: 'blackcoffee',
        img: '/images/blackcoffee.jpg',
        description: {
            es: 'E-commerce de una marca ficticia llamada Black Coffee, especializada en café. Desarrollado con HTML, CSS y JavaScript.',
            en: 'E-commerce for a fictional coffee brand called Black Coffee. Developed with HTML, CSS and JavaScript.',
        },
        url: 'https://blackcoffee-store.netlify.app/'
    }
]

const ProjectsContainer = () => {
    
    return <Projects projects={projects} />
}

export default ProjectsContainer