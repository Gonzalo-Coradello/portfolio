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
            'Soy un desarrollador Full-Stack de Argentina que ama crear soluciones y hacer proyectos realidad.',
          about: {
            heading: 'Sobre mí',
            cv: 'Mi CV',
            url: 'https://drive.google.com/file/d/10bnavm0etfVJkYyFfqLVohEN3Iy_pBsN/view?usp=drive_link',
            part1:
              'Soy un desarrollador Full-Stack disponible para trabajos de tiempo completo, medio tiempo y proyectos freelance.',
            part2:
              'Soy Gonzalo Coradello, desarrollador web con más de un año de experiencia. Veo la programación como un proceso de aprendizaje continuo y me esfuerzo por mejorar mis habilidades e incorporar conocimientos nuevos todos los días. Me apasiona aprender y crear proyectos.',
            part3:
              'Tengo 23 años y actualmente vivo en Pergamino, Buenos Aires. Soy técnico multimedial y profesor de música, con más de tres años de experiencia en la docencia. El año pasado ingresé en el mundo de la programación y desde entonces mi objetivo es dedicarme a tiempo completo al desarrollo de software.',
            part4:
              'Tengo experiencia creando todo tipo de proyectos, desde sitios estáticos o API simples hasta proyectos complejos como e-commerce. Cuento con conocimientos sólidos tanto en el Front End como en el Back End. Recientemente terminé la Carrera de Desarrollo Full Stack de Coderhouse, de más de un año de duración.',
            part5:
              'Actualmente estoy buscando una oportunidad laboral para crecer en mi carrera como desarrollador. 🚀',
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
            "I'm a creative Full-Stack Developer from Argentina who loves to create solutions and bring projects to life.",
          about: {
            heading: 'About me',
            cv: 'My resume',
            url: 'https://drive.google.com/file/d/1KZIyq7lopXPtiqh2yFvv4jwygAO-n0ix/view?usp=drive_link',
            part1:
              "I'm a Full Stack Developer available for freelance projects, full-time and part-time jobs.",
            part2:
              "I'm Gonzalo Coradello, web developer with more than a year of experience. I see programming as a continuous learning process and I strive to improve my skills and learn new things everyday. I am passionate about learning and building projects.",
            part3:
              'I am 23 years old and I currently live in Pergamino, Buenos Aires. I am a music teacher with more than three years of teaching experience. Last year I entered the world of programming and since then my goal is to become a full-time software developer.',
            part4:
              'I have experience building all kinds of projects, from static sites or simple APIs to big, complex projects such as e-commerces. I have solid knowledge in both the Front End and the Back End.',
            part5:
              'I am currently looking for a job opportunity to keep growing in my career as a software developer. 🚀',
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
