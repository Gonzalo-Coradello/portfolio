import Projects from "../Projects/Proyects"

export const projects = [
    {
        id: '1',
        name: 'the mistery fox',
        thumbnail: '/images/the-mistery-fox.jpg',
        screenshots: [
            '/images/screenshots/the-mistery-fox/the-mistery-fox-2.jpg',
            '/images/screenshots/the-mistery-fox/the-mistery-fox-3.jpg',
            '/images/screenshots/the-mistery-fox/the-mistery-fox-4.jpg'
        ],
        description: {
            es: 'The mistery fox es una boutique de libros que ofrece una experiencia única. Inspirate y disfruta sus increíbles historias. E-commerce Full-Stack con autenticación.',
            en: 'The mistery fox is a book boutique which offers an unique experience. Get inspired and enjoy their incredible stories. Full-Stack e-commerce with user authentication',
        },
        status: {
            es: 'en proceso',
            en: 'in progress'
        },
        features: {
            es: [
                'Registro de usuarios e inicio de sesión.',
                'Autenticación y autorización con Passport y JWT.',
                'Implementaciones de seguridad.',
                'Products fetched from MongoDB database.',
                'Filter by category.',
                'Fully functional cart.',
                'Almacenamiento en base de datos de usuarios, carritos y compras.',
                'Funciones de administrador. El administrador puede agregar productos nuevos y modificar o eliminar productos existentes.',
                'Arquitectura de software y patrones de diseño.',
                'Testing con Mocha y Chai.',
                'Deploy en la nube con Docker y Kubernetes.',
                'Buena experiencia de usuario, diseño cuidado y atención a los detalles.',
                'Completamente responsive. Se adapta a todas las pantallas.',
            ],
            en: [
                'Login/register functionality.',
                'Authentication and Authorization with Passport and JWT.',
                'Security measures.',
                'Acceso a los productos a través de base de datos de MongoDB.',
                'Filtrado por categorías.',
                'Funcionalidades de carrito completas.',
                'Users, carts and orders get stored in the database.',
                'Software arquitecture and design patterns.',
                'Admin functionality. Admin can add new products and modify or delete existing ones.',
                'Testing with Mocha and Chai.',
                'Cloud deployment with Docker and Kubernetes.',
                'Good user experience, polished design and attention to detail.',
                'Completely responsive.'
            ]
        },
        technologies: [
            'Node.js',
            'Express',
            'MongoDB',
            'React',
            'TailwindCSS',
            'Docker'
        ],
        github: 'https://github.com/Gonzalo-Coradello/the-mistery-fox_ecommerce',
        backend: 'https://github.com/Gonzalo-Coradello/backend-ecommerce',
        deploy: '',
        credits: {
            es: 'Diseño, branding y logo: Talia Laborde',
            en: 'Branding, logo and design: Talia Laborde'
        }
    },
    {
        id: '2',
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
            es: 'E-commerce inspirado en ZARA, una de las principales empresas de moda internacional.',
            en: 'E-commerce inspired by ZARA, one of the biggest international fashion companies.',
        },
        features: {
            es: [
                'Acceso a los productos a través de una base de datos.',
                'Filtrado por categorías.',
                'Selección de color y talle.',
                'Galería de imágenes para cada producto.',
                'Funcionalidades de carrito completas.',
                'Detalles de la compra.',
                'Formulario de compra con validación.',
                'Con cada compra se reduce el stock de los productos en la base de datos.',
                'Almacenamiento en base de datos de las órdenes de los usuarios.',
                'Buena experiencia de usuario, diseño cuidado y atención a los detalles.',
                'Completamente responsive. Se adapta a todas las pantallas.'
            ],
            en: [
                'Products fetched from database.',
                'Filter by category.',
                'Color and size selection.',
                'Product gallery for each product.',
                'Fully functional cart.',
                'Form validation.',
                'Order details.',
                'Stock in database reduces with each order.',
                'Users\' orders get stored in the database.',
                'Good user experience, polished design and attention to detail.',
                'Completely responsive.'
            ]
        },
        technologies: [
            'React',
            'CSS',
            'Firebase'
        ],
        github: 'https://github.com/Gonzalo-Coradello/zara-for-men_ecommerce',
        deploy: 'https://zara-for-men.vercel.app',
        credits: {
            es: 'Diseño: Talia Laborde',
            en: 'Design: Talia Laborde'
        }
    },
    {
        id: '3',
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
            es: 'E-commerce de BLACKCOFFEE, tostadores de café de alta calidad. Su misión es que puedas disfrutar del mejor café en la comodidad de tu hogar.',
            en: 'E-commerce for BLACKCOFFEE, high quality coffee roasters. Their mission is that you can enjoy the best coffee from the comfort of your home.',
        },
        features: {
            es: [
                'Funcionalidades de carrito completas.',
                'Detalles de la compra.',
                'Formulario de compra con validación.',
                'El carrito se preserva en el local storage.',
                'Buena experiencia de usuario, diseño pulido y atención a los detalles.',
                'Diseño responsive.',
                'Landing page.',
                'Manipulación del DOM.'
            ],
            en: [
                'Fully functional cart.',
                'Order details.',
                'Form validation.',
                'Cart is preserved in local storage.',
                'Good user experience, polished design and attention to detail.',
                'Completely responsive.',
                'Landing page.',
                'DOM manipulation.'
            ]
        },
        technologies: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        github: 'https://github.com/Gonzalo-Coradello/blackcoffee-ecommerce',
        deploy: 'https://blackcoffee-store.netlify.app/',
        credits: {
            es: 'Diseño, branding y logo: Talia Laborde',
            en: 'Branding, logo and design: Talia Laborde'
        }
    },
    {
        id: '4',
        name: 'To-do app',
        thumbnail: '/images/to-do-mern.jpg',
        screenshots: [
            '/images/screenshots/to-do-app/1.jpg',
            '/images/screenshots/to-do-app/2.jpg'
        ],
        description: {
            es: 'Aplicación de lista de tareas Full-Stack con autenticación de usuarios.',
            en: 'Full-Stack to-do app with user authentication.',
        },
        features: {
            es: [
                'Sistema de registro de usuarios e inicio de sesión.',
                'Autenticación y autorización.',
                'Implementaciones de seguridad: hash de contraseñas y JSON Web Tokens.',
                'Persistencia de usuarios y tareas en base de datos de MongoDB.',
                'CRUD Full-Stack.',
                'Stack MERN.'
            ],
            en: [
                'Login/register functionality.',
                'Authentication and Authorization.',
                'Security measures: password hashing and JSON Web Tokens.',
                'Users and tasks get stored in MongoDB database.',
                'Full-Stack CRUD.',
                'MERN stack.'
            ]
        },
        technologies: [
            'MongoDB',
            'Express',
            'React',
            'Node.js',
            'MUI'
        ],
        github: 'https://github.com/Gonzalo-Coradello/to-do_mern',
        deploy: 'https://to-do-mern.vercel.app/'
    }
]

const ProjectsContainer = () => {
    
    return <Projects projects={projects} />
}

export default ProjectsContainer