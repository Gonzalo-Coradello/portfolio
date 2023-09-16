import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      es: {
        translation: {
          hero: {
            part1: 'Hola,',
            part2: 'soy',
            part3: 'visitá mis proyectos',
          },
          projects: {
            heading: 'Mis proyectos',
            inst: 'Click en el título para ver más detalles.',
            link: 'Todos los proyectos',
          },
          presentation:
            'Desarrollador Full-Stack de Argentina que ama crear soluciones y hacer proyectos realidad.',
          about: {
            heading: 'Sobre mí',
            cv: 'Mi CV',
            url: 'https://drive.google.com/file/d/10bnavm0etfVJkYyFfqLVohEN3Iy_pBsN/view?usp=drive_link',
            part1:
              'Soy un desarrollador Full-Stack con amplia experiencia creando sitios web y aplicaciones móviles.',
            part2:
              'Soy Gonzalo Coradello, desarrollador Full Stack especializado en React, Node.js y ASP.NET. Soy de Argentina y tengo 24 años.',
            part3:
              'Me apasiona crear proyectos, trabajar en equipo y aprender nuevas tecnologías. Cuento con experiencia sólida en Back End, Front End y desarrollo de aplicaciones móviles.',
            part4:
              'Mi objetivo es seguir creciendo en mi carrera profesional y nunca dejar de aprender. 🚀',
            experience: {
              experience: 'Experiencia',
              education: 'Educación',
              present: 'actualidad',
              inProgress: 'en curso',
              showMore: 'ver más',
              showLess: 'ver menos',
              at: 'en',
            },
            skills: 'Mis skills',
          },
          header: {
            home: 'Inicio',
            projects: 'Proyectos',
            about: 'Sobre mí',
            contact: 'Contacto',
          },
          footer: {
            design: 'Diseño: ',
            illustration: 'Ilustración: ',
          },
          details: {
            status: 'Estado: ',
            features: 'Características',
            technologies: 'Creado con: ',
            deploy: 'proximamente',
          },
        },
      },
      en: {
        translation: {
          hero: {
            part1: 'Hello,',
            part2: "I'm",
            part3: 'check out my work',
          },
          projects: {
            heading: 'My works',
            inst: 'Click on title to see more details.',
            link: 'All my projects',
          },
          presentation:
            'Creative Full-Stack Developer from Argentina who loves to create solutions and bring projects to life.',
          about: {
            heading: 'About me',
            cv: 'My resume',
            url: 'https://drive.google.com/file/d/1KZIyq7lopXPtiqh2yFvv4jwygAO-n0ix/view?usp=drive_link',
            part1:
              'I am a Full-Stack developer with extensive experience creating websites and mobile applications.',
            part2:
              "I am Gonzalo Coradello, Full-Stack developer specialized in React, Node.js and ASP.NET. I am from Argentina and I'm 24 years old.",
            part3:
              'I am passionate about creating projects, working in teams and learning new technologies.',
            part4:
              'My goal is to keep growing in my professional career and never stop learning. 🚀',
            experience: {
              experience: 'Experience',
              education: 'Education',
              present: 'present',
              inProgress: 'in progress',
              showMore: 'show more',
              showLess: 'show less',
              at: 'at',
            },
            skills: 'My skillset',
          },
          header: {
            home: 'Home',
            projects: 'Projects',
            about: 'About',
            contact: 'Contact',
          },
          footer: {
            design: 'Design: ',
            illustration: 'Illustration: ',
          },
          details: {
            status: 'Status: ',
            features: 'Features',
            technologies: 'Created with: ',
            deploy: 'coming soon',
          },
        },
      },
    },
  })

export default i18n
