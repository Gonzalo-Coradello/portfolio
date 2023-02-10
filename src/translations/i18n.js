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
                part3: 'visitá mis proyectos'
            },
            projects: {
                heading: 'Mis trabajos',
                inst: 'Click en el título para visitar la página.'
            },
            presentation: 'Soy un desarrollador Full-Stack de Argentina que ama crear soluciones y hacer proyectos realidad.',
            about: {
                heading: 'Sobre mí',
                part1: 'Soy un desarrollador Full-Stack disponible para trabajos de tiempo completo, medio tiempo y proyectos freelance.',
                part2: 'Soy Gonzalo Coradello, desarrollador web. Tengo 23 años y vivo en Pergamino, Buenos Aires. Soy profesor de música y técnico multimedial. Los últimos años estuve trabajando como docente mientras avanzaba con la carrera de profesor.',
                part3: 'Siempre amé la tecnología. Descubrí la programación hace poco tiempo y me enamoré de las posibilidades que brinda este campo. Empecé a programar en 2022 y desde entonces me esfuerzo por mejorar cada día.',
                part4: 'Tengo una experiencia sólida en el Front End, habiendo trabajado en varios proyectos personales. Actualmente me encuentro desarrollando mis habilidades en el Back End y trabajando en mi proyecto más ambicioso: un ecommerce Full Stack. Mi objetivo actual es conseguir mi primer trabajo como desarrollador, además de seguir aprendiendo nuevas tecnologías y creando sitios web. ✨',
                part5: 'Me apasiona aprender, crear soluciones y hacer realidad proyectos. 🚀',
                skills: 'Mis skills'
            },
            header: {
              home: "Inicio",
              about: "Sobre mí",
              contact: "Contacto"
            },
            footer: {
              design: "Diseño: ",
              illustration: "Ilustración: "
            }
        }
      },
      en: {
        translation: {
            hero: {
                part1: 'Hello,',
                part2: "I'm",
                part3: 'check out my work'
            },
            projects: {
                heading: 'My works',
                inst: 'Click on title to visit the site.'
            },
            presentation: "I'm a creative Full-Stack Developer from Argentina who loves to create solutions and bring projects to life.",
            about: {
                heading: 'About me',
                part1: "I'm a Full Stack Developer available for freelance projects, full-time and part-time jobs.",
                part2: "I'm Gonzalo Coradello, web developer from Argentina. I'm 23 and I am a music professor.",
                part3: "I've always loved technology. I discovered programming a short time ago and I fell in love with it for the amazing posibilities that it offers. I started coding in 2022 and since then I strive to get better everyday.",
                part4: "I have solid Front End experience, having worked at several personal projects. I'm currently developing my Back End skills and working on my biggest proyect: a Full Stack Ecommerce. My current goal is to get my first job as a developer, as well as keep learning new technologies and building websites. ✨",
                part5: "I'm passionate about learning, creating solutions and bringing projects to life. 🚀",
                skills: 'My skillset'
            },
            header: {
              home: "Home",
              about: "About",
              contact: "Contact"
            },
            footer: {
              design: "Design: ",
              illustration: "Illustration: "
            }
        }
      }
    }
  });

export default i18n;