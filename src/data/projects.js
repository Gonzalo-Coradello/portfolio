export const projects = [
  {
    id: '1',
    name: 'Crumbly',
    thumbnail: '/images/crumbly.png',
    screenshots: [
      '/images/screenshots/crumbly/1.PNG',
      '/images/screenshots/crumbly/2.PNG',
      '/images/screenshots/crumbly/3.PNG',
      '/images/screenshots/crumbly/4.PNG',
      '/images/screenshots/crumbly/5.PNG',
      '/images/screenshots/crumbly/6.PNG',
      '/images/screenshots/crumbly/7.PNG',
      '/images/screenshots/crumbly/8.PNG',
      '/images/screenshots/crumbly/9.PNG',
      '/images/screenshots/crumbly/10.PNG',
      '/images/screenshots/crumbly/11.PNG',
      '/images/screenshots/crumbly/12.PNG',
      '/images/screenshots/crumbly/13.PNG',
      '/images/screenshots/crumbly/14.PNG',
      '/images/screenshots/crumbly/15.PNG',
      '/images/screenshots/crumbly/16.PNG',
      '/images/screenshots/crumbly/17.PNG',
      '/images/screenshots/crumbly/18.PNG',
    ],
    description: {
      es: 'Crumbly es una aplicación móvil que tiene como objetivo brindarte deliciosas recetas para que acompañes tus bebidas favoritas. ☕',
      en: 'Crumbly is a mobile application that aims to provide you with delicious recipes to accompany your favorite drinks. ☕',
    },
    features: {
      es: [
        'Aplicación móvil multiplataforma desarrollada con React Native y TypeScript.',
        'Persistencia de datos con Firebase Realtime Database.',
        'Manejo del estado global con Redux Toolkit y de comunicación HTTP con RTK Query.',
        'Interfaz de usuario intuitiva y atractiva.',
        'Funcionalidad de registro e inicio de sesión.',
        'Persistencia de la sesión del usuario con SQLite.',
        'Actualización de foto de perfil por medio de la cámara o la galería de imágenes.',
        'Visualización de recetas filtradas por categorías.',
        'Los usuarios pueden guardar recetas en su lista de favoritos o crear listas personalizadas.',
        'Los usuarios pueden crear, actualizar y eliminar sus propias recetas.',
        'Los usuarios pueden dejar reseñas en las recetas, compartiendo opcionalmente una foto.',
      ],
      en: [
        'Cross-platform mobile app developed with React Native and TypeScript.',
        'Data persistance using Firebase Realtime Database.',
        'Global state management with Redux Toolkit and HTTP communication with RTK Query.',
        'Atractive and intuitive UI.',
        'Sign up and sign in functionality.',
        'Session persistance with SQLite.',
        'Profile picture update from camera or image gallery.',
        'Recipes filtered by categories.',
        'Users can save recipes to their favorites as well as create custom lists.',
        'Users can create, update and delete their own recipes.',
        'Users can review recipes, optionally including a picture.',
      ],
    },
    technologies: ['React Native', 'TypeScript', 'Redux', 'Firebase', 'Expo'],
    github: 'https://github.com/Gonzalo-Coradello/crumbly-app',
    important: true,
    credits: {
      es: 'Diseño, branding y logo: Talia Laborde',
      en: 'Branding, logo and design: Talia Laborde',
    },
  },
  {
    id: '2',
    name: 'the mistery fox',
    thumbnail: '/images/the-mistery-fox.png',
    screenshots: [
      '/images/screenshots/the-mistery-fox/the-mistery-fox-1.png',
      '/images/screenshots/the-mistery-fox/the-mistery-fox-2.png',
      '/images/screenshots/the-mistery-fox/the-mistery-fox-3.png',
      '/images/screenshots/the-mistery-fox/the-mistery-fox-4.png',
      '/images/screenshots/the-mistery-fox/the-mistery-fox-5.png',
      '/images/screenshots/the-mistery-fox/the-mistery-fox-6.png',
      '/images/screenshots/the-mistery-fox/the-mistery-fox-7.png',
      '/images/screenshots/the-mistery-fox/the-mistery-fox-8.png',
      '/images/screenshots/the-mistery-fox/the-mistery-fox-9.png',
      '/images/screenshots/the-mistery-fox/the-mistery-fox-10.png',
      '/images/screenshots/the-mistery-fox/the-mistery-fox-11.png',
      '/images/screenshots/the-mistery-fox/the-mistery-fox-12.png',
      '/images/screenshots/the-mistery-fox/the-mistery-fox-13.png',
    ],
    description: {
      es: 'The mistery fox es una boutique de libros que ofrece una experiencia única. E-commerce Full-Stack con autenticación.',
      en: 'The mistery fox is a book boutique which offers an unique experience. Full-Stack e-commerce with user authentication',
    },
    features: {
      es: [
        'Proceso de compra completamente funcional conectado con pasarela de pago.',
        'Servicio de autenticación y autorización que incluye registro de usuarios, inicio y cierre de sesión, cambio de contraseña y cambio de rol entre usuario normal y premium.',
        'Rol de usuario premium con posibilidad de crear, modificar o eliminar sus propios productos.',
        'Rol de administrador con permisos elevados.',
        'Acceso a los productos a través de base de datos de MongoDB.',
        'Paginación de productos y filtrado por categorías.',
        'Almacenamiento en base de datos de usuarios, productos, carritos y tickets de compra.',
        'Servicio de mailing. Se recibe un email al registrar un usuario, al realizar una compra, al solicitar un cambio de contraseña y al eliminarse un producto de un usuario premium.',
        'Servicio de subida de archivos. Foto de perfil, imágenes de producto y documentos para actualizar el usuario a premium. ',
        'Buena experiencia de usuario, diseño cuidado y atención a los detalles.',
        'Completamente responsive. Se adapta a todas las pantallas.',
      ],
      en: [
        'Fully functional e-commerce connected to a payment processing platform.',
        'Authentication and authorization service that includes user registration, login and logout, password change and role change between normal and premium user.',
        'Premium role which can create, update or delete its own products.',
        'Administrator role with elevated permissions.',
        'Products are accesed through the MongoDB database.',
        'Products pagination and filter by category.',
        'Database persistance for users, products, carts and tickets.',
        "Mailing service for user registration, checkout, password change and when a premium user's product gets deleted.",
        'File upload service. Profile picture, product images and documents to upgrade to premium.',
        'Good user experience, polished design and attention to detail.',
        'Completely responsive.',
      ],
    },
    technologies: [
      'Node.js',
      'Express',
      'MongoDB',
      'React',
      'TailwindCSS',
      'Mocha',
      'Chai',
    ],
    github: 'https://github.com/Gonzalo-Coradello/the-mistery-fox_ecommerce',
    important: true,
    backend: 'https://github.com/Gonzalo-Coradello/backend-ecommerce',
    deploy: 'https://themisteryfox.vercel.app',
    credits: {
      es: 'Diseño, branding y logo: Talia Laborde',
      en: 'Branding, logo and design: Talia Laborde',
    },
  },
  {
    id: '3',
    name: 'STAGGI HomeBanking',
    thumbnail: '/images/homebanking.png',
    screenshots: [
      '/images/screenshots/homebanking/1.png',
      '/images/screenshots/homebanking/3.png',
      '/images/screenshots/homebanking/4.png',
      '/images/screenshots/homebanking/5.jpg',
      '/images/screenshots/homebanking/6.png',
      '/images/screenshots/homebanking/7.png',
      '/images/screenshots/homebanking/8.jpg',
      '/images/screenshots/homebanking/9.png',
      '/images/screenshots/homebanking/10.png',
      '/images/screenshots/homebanking/11.png',
    ],
    description: {
      es: 'Aplicación de Home Banking desarrollada con ASP.NET y Angular. Cuenta con la posibilidad de registrarse, iniciar sesión, crear cuentas y tarjetas de crédito, pedir préstamos y realizar transacciones.',
      en: 'Home Banking web application developed with ASP.NET and Angular. Users can register, log in, create accounts and credit cards, request loans and make transactions.',
    },
    features: {
      es: [
        'Autenticación por medio de cookies.',
        'Funcionalidad de crear cuentas y tarjetas de crédito, pedir préstamos y realizar transacciones.',
        'API web desarrollada con ASP.NET 6.0, Entity Framework Core y SQL Server.',
        'Arquitectura: la API está dividida en Controladores, Servicios, Repositorios, Modelos y DTOs, cumpliendo el Principio de Responsabilidad Única.',
        'Interfaz de usuario atractiva e intuitiva.',
      ],
      en: [
        'Cookie-based authentication.',
        'Users can create accounts and credit cards, request loans and make transactions.',
        'Web API developed with ASP.NET 6.0, Entity Framework Core and SQL Server.',
        'Architecture: the API is divided into Controllers, Services, Repositories, Models and DTOs, achieving the Single Responsibility Principle.',
        'Attractive and intuitive UI.',
      ],
    },
    technologies: ['C#', '.NET', 'SQL Server', 'Angular', 'TailwindCSS'],
    github: 'https://github.com/STAGGI-Develop/STAGGI-homebanking_frontend',
    important: true,
    backend: 'https://github.com/STAGGI-Develop/STAGGI-homebanking_backend',
  },
  {
    id: '4',
    name: 'STAGGI Budget',
    thumbnail: '/images/budget.png',
    screenshots: [
      '/images/screenshots/budget/2.png',
      '/images/screenshots/budget/3.jpg',
      '/images/screenshots/budget/4.png',
      '/images/screenshots/budget/5.png',
      '/images/screenshots/budget/6.png',
      '/images/screenshots/budget/7.png',
      '/images/screenshots/budget/8.png',
      '/images/screenshots/budget/9.png',
      '/images/screenshots/budget/10.png',
      '/images/screenshots/budget/11.png',
    ],
    description: {
      es: 'STAGGI Budget es una aplicación web diseñada para ayudarlo a realizar un seguimiento detallado de sus gastos, presupuestar adecuadamente y planificar sus ahorros de manera categorizada.',
      en: 'STAGGI Budget is a web application designed to help you track your expenses, budget appropriately, and plan your savings in a categorized manner.',
    },
    features: {
      es: [
        'Seguimiento de gastos: Agrega y categoriza fácilmente tus gastos mensuales.',
        'Presupuesto: Establece un presupuesto mensual y semanal y mantén el control de tus finanzas.',
        'Visualizaciones: Mira tus gastos del mes o de la semana pasada a través de gráficos.',
        'Ahorros: Planifica y categoriza tus ahorros para futuros objetivos.',
        'API web desarrollada con ASP.NET 6.0, Entity Framework Core, SQL Server, JWT e Identity Core.',
        'Arquitectura: la API está dividida en Controladores, Servicios, Repositorios, Modelos y DTOs, cumpliendo el Principio de Responsabilidad Única.',
        'Interfaz de usuario atractiva e intuitiva',
      ],
      en: [
        'Expense Tracking: Easily add and categorize your monthly expenses.',
        'Budgeting: Set up a monthly and weekly budget and stay on top of your finances.',
        'Visualizations: View your expenses from last month or week through charts.',
        'Savings: Plan and categorize your savings for future goals.',
        'Web API developed with ASP.NET 6.0, Entity Framework Core, SQL Server, JWT and Identity.',
        'Architecture: the API is divided into Controllers, Services, Repositories, Models and DTOs, achieving the Single Responsibility Principle.',
        'Attractive and intuitive UI',
      ],
    },
    technologies: ['C#', '.NET', 'SQL Server', 'Docker', 'React', 'Chakra UI'],
    github: 'https://github.com/STAGGI-Develop/STAGGI-Budget-Frontend',
    important: true,
    backend: 'https://github.com/STAGGI-Develop/STAGGI-Budget-Backend',
  },
  {
    id: '5',
    name: 'Techstore',
    thumbnail: '/images/techstore.jpg',
    screenshots: ['/images/screenshots/techstore/1.jpg'],
    description: {
      es: 'Techstore es una aplicación móvil de e-commerce desarrollada con React Native, Redux Toolkit y Firebase, utilizando Expo.',
      en: 'Techstore is a mobile e-commerce app developed with React Native, Redux Toolkit and Firebase, using Expo.',
    },
    features: {
      es: [
        'Aplicación móvil multiplataforma desarrollada con React Native.',
        'Persistencia de datos con Firebase Realtime Database.',
        'Manejo del estado global con Redux Toolkit y de comunicación HTTP con RTK Query.',
        'Interfaz de usuario intuitiva y atractiva.',
        'Funcionalidad de registro e inicio de sesión.',
        'Persistencia de la sesión del usuario con SQLite.',
        'Actualización de foto de perfil por medio de la cámara.',
        'Servicio de localización con mapa interactivo.',
        'Carrito de compras completamente funcional.',
      ],
      en: [
        'Cross-platform mobile app developed with React Native.',
        'Data persistance using Firebase Realtime Database.',
        'Global state management with Redux Toolkit and HTTP communication with RTK Query.',
        'Atractive and intuitive UI.',
        'Sign up and sign in functionality.',
        'Session persistance with SQLite.',
        'Profile picture update from camera.',
        'Location service with interactive map.',
        'Fully functional cart.',
      ],
    },
    technologies: ['React Native', 'Redux', 'Firebase', 'Expo'],
    github: 'https://github.com/Gonzalo-Coradello/techstore_react-native',
    important: false,
  },

  {
    id: '6',
    name: 'Pokéteams',
    thumbnail: '/images/poketeams.png',
    screenshots: [
      '/images/screenshots/poketeams/poketeams1.png',
      '/images/screenshots/poketeams/poketeams2.png',
      '/images/screenshots/poketeams/poketeams3.png',
      '/images/screenshots/poketeams/poketeams4.png',
      '/images/screenshots/poketeams/poketeams5.png',
      '/images/screenshots/poketeams/poketeams6.png',
      '/images/screenshots/poketeams/poketeams7.png',
      '/images/screenshots/poketeams/poketeams8.png',
      '/images/screenshots/poketeams/poketeams9.png',
    ],
    description: {
      es: 'Creá tu equipo Pokémon y compartilo con el mundo. Proyecto Full-Stack desarrollado con Next.js 13.',
      en: 'Create your Pokémon Team and show it to the world. Full-Stack project developed with Next.js 13.',
    },
    features: {
      es: [
        'Pokédex con más de 1.000 Pokémon disponibles.',
        'Pokémon obtenidos de la PokeAPI.',
        'Paginación, búsqueda por nombre y filtrado por tipo.',
        'Detalles del Pokémon con botón para agregar a tu equipo.',
        'Página Teams en la que se muestran los equipos creados por la comunidad.',
        'Función de crear tu propio equipo Pokémon.',
        'Los equipos se guardan en una base de datos PostgreSQL.',
        'Generación de sitios estáticos (SSG) y renderizado del lado del servidor (SSR).',
      ],
      en: [
        'Pokédex with over 1.000 available Pokémon.',
        'Pokémon fetched from PokeAPI.',
        'Pagination, search by name and filter by type.',
        "Pokémon details with 'Add to my team' button.",
        'Teams page which lists all the teams created by the comunity.',
        'Create team functionality.',
        'Teams get stored and fetched from a PostgreSQL database.',
        'Static Site Generation (SSG) and Server Side Rendering (SSR).',
      ],
    },
    technologies: [
      'Next.js',
      'TypeScript',
      'Prisma',
      'PostgreSQL',
      'TailwindCSS',
    ],
    github: 'https://github.com/Gonzalo-Coradello/poketeams',
    important: false,
    deploy: 'https://poketeams-nextjs.vercel.app/',
    credits: {
      es: 'Pokémon es una marca registrada. Todos los derechos pertenecen a Nintendo y The Pokémon Company.',
      en: 'All rights belong to Nintendo and The Pokémon Company.',
    },
  },
  {
    id: '7',
    name: 'ZARA for men',
    thumbnail: '/images/zara-for-men.jpg',
    screenshots: [
      '/images/screenshots/zara-for-men/1.jpg',
      '/images/screenshots/zara-for-men/2.jpg',
      '/images/screenshots/zara-for-men/3.jpg',
      '/images/screenshots/zara-for-men/4.jpg',
      '/images/screenshots/zara-for-men/5.jpg',
      '/images/screenshots/zara-for-men/6.jpg',
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
        'Completamente responsive. Se adapta a todas las pantallas.',
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
        "Users' orders get stored in the database.",
        'Good user experience, polished design and attention to detail.',
        'Completely responsive.',
      ],
    },
    technologies: ['React', 'CSS', 'Firebase'],
    github: 'https://github.com/Gonzalo-Coradello/zara-for-men_ecommerce',
    important: true,
    deploy: 'https://zara-for-men.vercel.app',
    credits: {
      es: 'Diseño: Talia Laborde',
      en: 'Design: Talia Laborde',
    },
  },
  {
    id: '8',
    name: 'Bloglist',
    thumbnail: '/images/bloglist.jpg',
    screenshots: [
      '/images/screenshots/bloglist/1.jpg',
      '/images/screenshots/bloglist/2.jpg',
      '/images/screenshots/bloglist/3.jpg',
      '/images/screenshots/bloglist/4.jpg',
      '/images/screenshots/bloglist/5.jpg',
      '/images/screenshots/bloglist/6.jpg',
      '/images/screenshots/bloglist/7.jpg',
    ],
    description: {
      es: 'Aplicación Full Stack con autenticación para compartir artículos sobre programación. Proyecto final de Full Stack Open.',
      en: "Full Stack app in which users can register, log in and share blog posts about programming. Final project for Full Stack Open's core course.",
    },
    features: {
      es: [
        'Autenticación de usuarios.',
        'Stack MERN.',
        'CRUD. Los posts pueden ser vistos, creados, eliminados y editados.',
        'Tests unitarios, de integración y End to End (E2E).',
        'Test Driven Development (TDD).',
      ],
      en: [
        'User authentication.',
        'MERN stack.',
        'CRUD functionality. Posts can be created, liked, commented and deleted.',
        'Unit, integration and End to End (E2E) testing.',
        'Test Driven Development (TDD).',
      ],
    },
    technologies: [
      'MongoDB',
      'Express',
      'React',
      'Node.js',
      'Redux',
      'Material UI',
      'Jest',
      'Testing Library',
      'Cypress',
    ],
    github: 'https://github.com/Gonzalo-Coradello/bloglist-mern',
    important: false,
    deploy: 'https://bloglist-fullstack-ag00.onrender.com/',
  },
  {
    id: '9',
    name: 'Homes',
    thumbnail: '/images/homes.jpg',
    screenshots: [
      '/images/screenshots/homes/1.jpg',
      '/images/screenshots/homes/2.jpg',
      '/images/screenshots/homes/3.jpg',
      '/images/screenshots/homes/4.jpg',
    ],
    description: {
      es: 'Homes es una SPA de Angular que muestra casas en renta y permite acceder a los detalles de cada casa.',
      en: 'Homes is an Angular SPA that lists houses for rent and shows the details of individual houses.',
    },
    features: {
      es: [
        'Éste es mi primer proyecto de Angular y fue creado siguiendo el tutorial de la documentación. Incluye conceptos básicos de Angular como componentes, inputs, property binding, directivas, servicios, routing, formularios reactivos y comunicación HTTP.',
      ],
      en: [
        'This is my first Angular project. It was created following the tutorial on Angular docs. It features basic Angular concepts like components, inputs, property binding, directives, services, routing, reactive forms and HTTP communication.',
      ],
    },
    technologies: ['Angular', 'TypeScript', 'CSS', 'HTML'],
    github: 'https://github.com/Gonzalo-Coradello/angular-homes',
    important: false,
  },

  {
    id: '10',
    name: 'BLACKCOFFEE',
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
        'Manipulación del DOM.',
      ],
      en: [
        'Fully functional cart.',
        'Order details.',
        'Form validation.',
        'Cart is preserved in local storage.',
        'Good user experience, polished design and attention to detail.',
        'Completely responsive.',
        'Landing page.',
        'DOM manipulation.',
      ],
    },
    technologies: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/Gonzalo-Coradello/blackcoffee-ecommerce',
    important: true,
    deploy: 'https://blackcoffee-store.netlify.app/',
    credits: {
      es: 'Diseño, branding y logo: Talia Laborde',
      en: 'Branding, logo and design: Talia Laborde',
    },
  },
  {
    id: '11',
    name: 'To-do app',
    thumbnail: '/images/to-do-mern.jpg',
    screenshots: [
      '/images/screenshots/to-do-app/1.jpg',
      '/images/screenshots/to-do-app/2.jpg',
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
        'Stack MERN.',
      ],
      en: [
        'Login/register functionality.',
        'Authentication and Authorization.',
        'Security measures: password hashing and JSON Web Tokens.',
        'Users and tasks get stored in MongoDB database.',
        'Full-Stack CRUD.',
        'MERN stack.',
      ],
    },
    technologies: ['MongoDB', 'Express', 'React', 'Node.js', 'MUI'],
    github: 'https://github.com/Gonzalo-Coradello/to-do_mern',
    deploy: 'https://to-do-mern.vercel.app/',
  },
]
