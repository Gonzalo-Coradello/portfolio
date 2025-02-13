import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

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
            part3: 'experiencia y proyectos',
            button: 'Contáctame',
          },
          projects: {
            heading: 'Mis proyectos',
            inst: 'Click en el título para ver más detalles.',
            link: 'Todos los proyectos',
          },
          title: 'Desarrollador Full-Stack',
          presentation:
            'de Argentina con amplia experiencia creando y dando mantenimiento a sitios web y aplicaciones móviles.',
          about: {
            heading: 'Sobre mí',
            cv: 'Mi CV',
            url: 'https://drive.google.com/file/d/10bnavm0etfVJkYyFfqLVohEN3Iy_pBsN/view?usp=drive_link',
            description:
              'Desarrollador Full Stack especializado en React Native, React, Node.js y TypeScript, con amplia experiencia en el desarrollo de aplicaciones móviles y web.\nMe he encargado del desarrollo completo de tres aplicaciones móviles desde la etapa inicial hasta su lanzamiento en producción y he creado múltiples sitios web para diversos clientes. Además, he trabajado en el mantenimiento de aplicaciones empresariales de gran escala y he brindado mentoría a nuevos desarrolladores, ayudándolos a integrarse de manera efectiva en los proyectos.\nEnfocado en ofrecer soluciones eficientes y de calidad, con un fuerte compromiso en trabajar de forma colaborativa para lograr el éxito de los proyectos.',
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
            deploy: 'Próximamente',
          },
        },
      },
      en: {
        translation: {
          hero: {
            part1: 'Hello,',
            part2: "I'm",
            part3: 'experience and projects',
            button: 'Get in touch',
          },
          projects: {
            heading: 'My works',
            inst: 'Click on title to see more details.',
            link: 'All my projects',
          },
          title: 'Full-Stack developer',
          presentation:
            'based in Argentina with extensive experience creating and maintaining websites and mobile applications.',
          about: {
            heading: 'About me',
            cv: 'My resume',
            url: 'https://drive.google.com/file/d/1KZIyq7lopXPtiqh2yFvv4jwygAO-n0ix/view?usp=drive_link',
            description:
              'Full Stack Developer specialized in React Native, React, Node.js, and TypeScript, with extensive experience in developing mobile and web applications.\nI have been responsible for the complete development of three mobile applications, from the initial stage to production, and have created multiple websites for various clients. Additionally, I have worked on maintaining large-scale enterprise applications and mentored new developers, helping them effectively integrate into projects.\nFocused on delivering efficient and high-quality solutions, with a strong commitment to collaborative work to ensure project success.',
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
            deploy: 'Coming soon',
          },
        },
      },
    },
  });

export default i18n;
