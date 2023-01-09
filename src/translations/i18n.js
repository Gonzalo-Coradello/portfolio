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
                part2: 'Soy Gonzalo Coradello, desarrollador web orientado al Front-End. Tengo 23 años y vivo en Pergamino, Buenos Aires. Soy profesor de música y técnico multimedial. Los últimos años estuve trabajando como docente mientras avanzaba con la carrera.',
                part3: 'Siempre amé la tecnología. Descubrí la programación hace poco tiempo y me enamoré de las posibilidades que brinda este campo. Empecé a programar en abril del 2022 y desde entonces me esfuerzo cada día por mejorar, aprendiendo nuevas tecnologías, mejorando mis habilidades y creando proyectos. Tengo claro que mi objetivo es dedicarme a la programación a nivel profesional.',
                part4: 'Me apasiona aprender, crear soluciones y hacer realidad proyectos.',
                skills: 'Mis skills'
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
                part2: "I'm Gonzalo Coradello, a Front-End oriented web developer from Argentina. I'm 23 and I am a music professor",
                part3: "I've always loved technology. I discovered programming a short time ago and I fell in love with it for the amazing posibilities that it offers. I started coding in april 2022 and since then I strive to get better everyday, learning new technologies, practicing my skills and working on proyects. My goal is to be a professional developer.",
                part4: "I'm passionate about learning, creating solutions and bringing projects to life.",
                skills: 'My skillset'
            }
        }
      }
    }
  });

export default i18n;