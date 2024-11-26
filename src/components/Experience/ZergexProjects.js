import { FaAppStoreIos } from 'react-icons/fa'
import { IoLogoGooglePlaystore } from 'react-icons/io5'
import { BsLaptop } from 'react-icons/bs'
import i18n from '../../translations/i18n'

export default function ZergexProjects() {
  const projects = [
    {
      id: 1,
      name: 'RealMeet',
      description: '',
      image: '/images/realmeet.PNG',
      appStore: 'coming-soon',
      playStore: 'coming-soon',
      website: 'coming-soon',
    },
    {
      id: 2,
      name: 'Hub+',
      description: 'Appointments app',
      image: '/images/hubplus.PNG',
      playStore:
        'https://play.google.com/store/apps/details?id=ar.com.stylehub',
      appStore: 'https://apps.apple.com/ar/app/hub/id6503994129',
      website: 'https://hubplus.com.ar',
    },
    {
      id: 3,
      name: 'Stetsiuk Fitness',
      description: 'Fitness app for the home',
      image: '/images/stetsiuk-fitness.PNG',
      appStore: 'coming-soon',
      playStore: 'coming-soon',
      website: '',
    },
  ]

  return (
    <div>
      <div className='flex gap-4 flex-wrap justify-center'>
        {projects.map(project => (
          <div
            key={project.id}
            className='rounded-lg p-px w-full sm:w-[180px] bg-gradient-to-r from-[rgb(236,188,238)] to-[rgb(71,138,201)]'
          >
            <div className='bg-white rounded-[7px] p-2'>
              <a
                href={`projects/${project.id}`}
                className='hover:opacity-60 active:opacity-40 transition-opacity duration-300'
              >
                <img
                  src={project.image}
                  alt=''
                  className='border border-gray-300 rounded-lg min-h-80 w-full mx-auto object-cover mb-2'
                />
              </a>
              <a
                href={`projects/${project.id}`}
                className='text-center hover:opacity-60 active:opacity-40 transition-opacity duration-300 w-fit'
              >
                <h3>{project.name}</h3>
                {/* <p>{project.description}</p> */}
              </a>
              <div className='flex gap-3 justify-center mt-2'>
                {project.appStore && (
                  <div
                    className='hover:scale-110 active:opacity-60 transition-all duration-300 after:absolute after:-left-[80%] after:top-15 after:text-[10px] after:font-medium after:leading-tight hover:after:content-[attr(after)] after:opacity-100 after:w-max'
                    after={
                      project.appStore === 'coming-soon'
                        ? i18n.t('details.deploy')
                        : undefined
                    }
                  >
                    <a
                      href={project.appStore}
                      target='_blank'
                      rel='noopener noreferrer'
                      className={` ${
                        project.appStore === 'coming-soon' &&
                        'pointer-events-none opacity-60'
                      }`}
                    >
                      <FaAppStoreIos size={26} />
                    </a>
                  </div>
                )}
                {project.playStore && (
                  <div
                    className='hover:scale-110 active:opacity-60 transition-all duration-300 after:absolute after:-left-[80%] after:top-15 after:text-[10px] after:font-medium after:leading-tight hover:after:content-[attr(after)] after:opacity-100 after:w-max'
                    after={
                      project.playStore === 'coming-soon'
                        ? i18n.t('details.deploy')
                        : undefined
                    }
                  >
                    <a
                      href={project.playStore}
                      target='_blank'
                      rel='noopener noreferrer'
                      className={` ${
                        project.playStore === 'coming-soon' &&
                        'pointer-events-none opacity-60'
                      }`}
                    >
                      <IoLogoGooglePlaystore size={26} />
                    </a>
                  </div>
                )}
                {project.website && (
                  <div
                    className='hover:scale-110 active:opacity-60 transition-all duration-300 after:absolute after:-left-[80%] after:top-15 after:text-[10px] after:font-medium after:leading-tight hover:after:content-[attr(after)] after:opacity-100 after:w-max'
                    after={
                      project.website === 'coming-soon'
                        ? i18n.t('details.deploy')
                        : undefined
                    }
                  >
                    <a
                      href={project.website}
                      target='_blank'
                      rel='noopener noreferrer'
                      className={` ${
                        project.website === 'coming-soon' &&
                        'pointer-events-none opacity-60'
                      }`}
                    >
                      <BsLaptop size={26} />
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
