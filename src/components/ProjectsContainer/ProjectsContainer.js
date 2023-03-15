import Projects from "../Projects/Proyects"

export const projects = [
    {
        id: '1',
        name: 'zara for men',
        thumbnail: '/images/zara-for-men.jpg',
        screenshots: [
            '/images/screenshots/zara-for-men/1.jpg',
            '/images/screenshots/zara-for-men/2.jpg',
            '/images/screenshots/zara-for-men/3.jpg',
            '/images/screenshots/zara-for-men/4.jpg',
            '/images/screenshots/zara-for-men/5.jpg',
            '/images/screenshots/zara-for-men/6.jpg',
            '/images/screenshots/zara-for-men/7.png',
            '/images/screenshots/zara-for-men/8.png',
            '/images/screenshots/zara-for-men/9.png',
            '/images/screenshots/zara-for-men/10.png',
            '/images/screenshots/zara-for-men/11.png'
        ],
        description: {
            es: 'E-commerce inspirado en la marca de indumentaria Zara. Desarrollado con React y CSS, con base de datos en Firebase.',
            en: 'E-commerce inspired by the brand Zara. Developed with React and CSS, with Firebase database.',
        },
        features: [
            'Feature 1',
            'Feature 2'
        ],
        technologies: [
            'HTML',
            'React',
            'Node.js'
        ],
        github: '',
        deploy: 'https://zara-for-men.vercel.app',
        credits: ''
    },
    {
        id: '2',
        name: 'blackcoffee',
        thumbnail: '/images/blackcoffee.jpg',
        screenshots: [
            '/images/screenshots/blackcoffee/1.jpg',
            '/images/screenshots/blackcoffee/2.jpg',
            '/images/screenshots/blackcoffee/3.jpg',
            '/images/screenshots/blackcoffee/4.jpg',
            '/images/screenshots/blackcoffee/5.jpg',
            '/images/screenshots/blackcoffee/6.jpg',
            '/images/screenshots/blackcoffee/7.jpg',
            '/images/screenshots/blackcoffee/8.jpg',
            '/images/screenshots/blackcoffee/9.jpg',
            '/images/screenshots/blackcoffee/10.png',
            '/images/screenshots/blackcoffee/11.png',
            '/images/screenshots/blackcoffee/12.png'
        ],
        description: {
            es: 'E-commerce de una marca ficticia llamada Black Coffee, especializada en café. Desarrollado con HTML, CSS y JavaScript.',
            en: 'E-commerce for a fictional coffee brand called Black Coffee. Developed with HTML, CSS and JavaScript.',
        },
        features: [
            'Feature 1',
            'Feature 2'
        ],
        technologies: [
            'HTML',
            'React',
            'Node.js'
        ],
        github: '',
        deploy: 'https://blackcoffee-store.netlify.app/',
        credits: ''
    },
    {
        id: '3',
        name: 'To-do app',
        thumbnail: '/images/to-do-mern.jpg',
        screenshots: [
            '/images/screenshots/to-do-app/1.jpg',
            '/images/screenshots/to-do-app/2.jpg'
        ],
        description: {
            es: 'Lista de tareas creada con MongoDB, Express, React, Node.js y MUI. Cuenta con un sistema de login implementado con medidas de seguridad como hash de contraseñas y JSON Web Tokens. Los usuarios y sus tareas se almacenan en la base de datos.',
            en: 'To-do app developed with MongoDB, Express, React, Node.js and MUI. It has a login system implemented with security measures such as password hashing and JSON Web Tokens. Users and tasks are stored in the database.',
        },
        features: [
            'Feature 1',
            'Feature 2'
        ],
        technologies: [
            'HTML',
            'React',
            'Node.js'
        ],
        github: '',
        deploy: 'https://to-do-mern.vercel.app/',
        credits: ''
    }
]

const ProjectsContainer = () => {
    
    return <Projects projects={projects} />
}

export default ProjectsContainer