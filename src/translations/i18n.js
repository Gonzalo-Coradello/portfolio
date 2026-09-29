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
          title: 'Desarrollador Mobile y Full-Stack',
          presentation:
            'especializado en React Native y TypeScript, con más de {{years}} años de experiencia llevando aplicaciones móviles y web a producción.',
          about: {
            heading: 'Sobre mí',
            description:
              'Desarrollador Mobile y Full-Stack con más de {{years}} años de experiencia desarrollando aplicaciones móviles y web. Especializado en React Native y TypeScript: arquitectura, integración con APIs y subidas a los stores de iOS y Android. Con amplia experiencia desarrollando funcionalidades end-to-end con Node.js, Nest.js, React, Next.js, PostgreSQL y AWS.\nActualmente trabajo como desarrollador Mobile y Full-Stack en proyectos en producción con un gran número de usuarios activos como Escuela Fácil. También he trabajado en el mantenimiento de aplicaciones empresariales de gran escala con arquitectura serverless, y he construido aplicaciones móviles desde cero hasta producción como único desarrollador.',
            experience: {
              experience: 'Experiencia',
              present: 'actualidad',
              showMore: 'ver más',
              showLess: 'ver menos',
            },
          },
          header: {
            home: 'Inicio',
            about: 'Sobre mí',
            contact: 'Contacto',
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
          title: 'Mobile and Full-Stack Developer',
          presentation:
            'specialized in React Native and TypeScript, with {{years}}+ years of experience shipping mobile and web applications to production.',
          about: {
            heading: 'About me',
            description:
              'Mobile and Full-Stack Developer with {{years}}+ years of experience building mobile and web applications. Specialized in React Native and TypeScript: architecture, API integration, and releases to the iOS and Android stores. Extensive experience delivering end-to-end features with Node.js, Nest.js, React, Next.js, PostgreSQL, and AWS.\nI currently work as a Mobile and Full-Stack Developer on production projects with a large number of active users, such as Escuela Fácil. I have also maintained large-scale enterprise applications with a serverless architecture, and built mobile apps from scratch to production as the only developer.',
            experience: {
              experience: 'Experience',
              present: 'present',
              showMore: 'show more',
              showLess: 'show less',
            },
          },
          header: {
            home: 'Home',
            about: 'About',
            contact: 'Contact',
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
