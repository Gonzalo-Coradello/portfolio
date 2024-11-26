import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Autoplay } from 'swiper'
import { icons } from '../../data/icons'
import SkillsIcon from '../About/SkillsIcon'
import { useTranslation } from 'react-i18next'
import { BsLaptop } from 'react-icons/bs'
import { FaAppStoreIos, FaGithub } from 'react-icons/fa'
import { IoLogoGooglePlaystore } from 'react-icons/io5'

const ProjectDetail = ({
  name,
  screenshots,
  description,
  status,
  features,
  technologies,
  github,
  backend,
  deploy,
  credits,
  mobile,
  googlePlay,
  appStore,
}) => {
  const { t, i18n } = useTranslation()

  return (
    <section className='font-light space-y-2 pt-[8rem]'>
      <div className='space-y-2 mb-4'>
        <h1 className='text-2xl font-medium'>{name}</h1>
        <p className='max-w-[72ch] mx-auto'>
          {description[i18n.resolvedLanguage]}
        </p>
        {status && (
          <p>
            <span className='font-medium'>{t('details.status')}</span>
            {status[i18n.resolvedLanguage]}
          </p>
        )}
      </div>

      <div
        className={`w-full max-w-[680px] mx-auto py-4 ${
          mobile ? 'max-w-[300px]' : ''
        }`}
      >
        <div
          className={`bg-white/10 backdrop-blur-sm rounded-lg shadow-md aspect-video ${
            mobile ? 'p-4 sm:p-4' : 'py-6 px-4 sm:py-12 sm:px-8'
          }`}
        >
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            centeredSlides={true}
            loop={true}
            loopedSlides={1}
            autoplay={{
              delay: 2000,
              reverseDirection: false,
              disableOnInteraction: false,
            }}
            speed={600}
          >
            {screenshots.map(img => (
              <SwiperSlide key={img}>
                <div>
                  <img
                    className='object-cover w-full rounded-lg'
                    src={img}
                    alt='screenshot'
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className='grid justify-center pb-4'>
        <h2 className='text-xl font-medium my-4'>{t('details.features')}</h2>
        <ul className='text-left list-disc ml-4 grid gap-2 px-2 sm:px-4'>
          {features[i18n.resolvedLanguage].map(feature => (
            <li
              className={`max-w-[65ch] leading-tight ${
                features[i18n.resolvedLanguage].length === 1
                  ? 'list-none'
                  : 'list-disc'
              }`}
              key={feature}
            >
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className='text-xl font-medium flex flex-col justify-center items-center gap-4 pt-4 pb-8 sm:flex-row sm:gap-16 md:gap-24'>
        {github ? (
          backend ? (
            <>
              <div className='grid gap-4'>
                <p>Backend</p>
                <a
                  href={backend}
                  className='hover:opacity-50 hover:scale-110 transition-all duration-200'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <FaGithub className='mx-auto' size={40} />
                </a>
              </div>
              <div className='grid gap-4'>
                <p>Frontend</p>
                <a
                  href={github}
                  className='hover:opacity-50 hover:scale-110 transition-all duration-200'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <FaGithub className='mx-auto' size={40} />
                </a>
              </div>
            </>
          ) : (
            <>
              <div className='grid gap-4'>
                <p>Github</p>
                <a
                  href={github}
                  className='hover:opacity-50 hover:scale-110 transition-all duration-200'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <FaGithub className='mx-auto' size={40} />
                </a>
              </div>
            </>
          )
        ) : null}
        {googlePlay || appStore ? (
          <>
            {appStore && (
              <div className='grid gap-2'>
                <p>App Store</p>
                <div
                  className='grid w-fit mx-auto hover:scale-110 active:opacity-60 transition-all duration-300 after:absolute after:-left-1/2 after:top-10 after:text-xs after:font-medium after:leading-tight hover:after:content-[attr(after)] after:opacity-100 after:w-max'
                  after={
                    appStore === 'coming-soon'
                      ? i18n.t('details.deploy')
                      : undefined
                  }
                >
                  <a
                    href={appStore}
                    target='_blank'
                    rel='noopener noreferrer'
                    className={
                      appStore === 'coming-soon' &&
                      'pointer-events-none opacity-60'
                    }
                  >
                    <FaAppStoreIos size={40} />
                  </a>
                </div>
              </div>
            )}
            {googlePlay && (
              <div className='grid gap-2'>
                <p>Google Play</p>
                <div
                  className='grid w-fit mx-auto hover:scale-110 active:opacity-60 transition-all duration-300 after:absolute after:-left-1/2 after:top-10 after:text-xs after:font-medium after:leading-tight hover:after:content-[attr(after)] after:opacity-100 after:w-max'
                  after={
                    googlePlay === 'coming-soon'
                      ? i18n.t('details.deploy')
                      : undefined
                  }
                >
                  <a
                    href={googlePlay}
                    target='_blank'
                    rel='noopener noreferrer'
                    className={
                      googlePlay === 'coming-soon' &&
                      'pointer-events-none opacity-60'
                    }
                  >
                    <IoLogoGooglePlaystore size={40} />
                  </a>
                </div>
              </div>
            )}
            {deploy && (
              <div className='grid gap-2'>
                <p>Web</p>

                <div
                  className='grid w-fit mx-auto hover:scale-110 active:opacity-60 transition-all duration-300 after:absolute after:-left-1/2 after:top-10 after:text-xs after:font-medium after:leading-tight hover:after:content-[attr(after)] after:opacity-100 after:w-max'
                  after={
                    deploy === 'coming-soon'
                      ? i18n.t('details.deploy')
                      : undefined
                  }
                >
                  <a
                    href={deploy}
                    target='_blank'
                    rel='noopener noreferrer'
                    className={
                      deploy === 'coming-soon' &&
                      'pointer-events-none opacity-60'
                    }
                  >
                    <BsLaptop size={40} />
                  </a>
                </div>
              </div>
            )}
          </>
        ) : (
          deploy && (
            <>
              <div className='grid gap-4'>
                <p>Deploy</p>
                <a
                  href={deploy}
                  className='hover:opacity-50 hover:scale-110 transition-all duration-200'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <BsLaptop className='mx-auto' size={40} />
                </a>
              </div>
            </>
          )
        )}
      </div>

      <div className='max-w-[800px] mx-auto'>
        <h2 className='text-xl font-medium my-4'>
          {t('details.technologies')}
        </h2>
        <div
          className={`grid grid-cols-3 gap-6 md:gap-10 justify-items-center py-12 px-8 bg-white/10 backdrop-blur-sm rounded-lg shadow-md`}
        >
          {technologies.map(tech => (
            <SkillsIcon
              label={tech}
              icon={icons.find(i => i.label === tech)?.icon}
              key={tech}
            />
          ))}
        </div>
      </div>

      {credits && (
        <div>
          <p className='font-normal max-w-[45ch] mx-auto'>
            {credits[i18n.resolvedLanguage]}
          </p>
        </div>
      )}
    </section>
  )
}

export default ProjectDetail
