import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from "swiper";
import { icons } from '../About/About'
import SkillsIcon from '../About/SkillsIcon';
import { useTranslation } from 'react-i18next';
import { BsLaptop } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'

const ProjectDetail = ({ name, screenshots, description, status, features, technologies, github, backend, deploy, credits }) => {

    const { t, i18n } = useTranslation()

  return (
    <section className='font-light space-y-2 pt-[8rem]'>
        <div className='space-y-2 mb-4'>
            <h1 className='text-2xl font-medium'>{name}</h1>
            <p className='max-w-[50ch] mx-auto'>{description[i18n.resolvedLanguage]}</p>
            { status && <p><span className='font-medium'>{t('details.status')}</span>{status[i18n.resolvedLanguage]}</p>}
        </div>

        <div className='w-full max-w-[680px] mx-auto py-4'>
            {/* <h2 className='text-xl font-medium sm:mb-4'>Screenshots</h2> */}
            <div className='py-6 px-4 bg-white/10 backdrop-blur-sm rounded-lg shadow-md sm:py-12 sm:px-8'>
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
                        disableOnInteraction: false
                    }}
                    speed={600}
                >
                    {screenshots.map(img => (
                        <SwiperSlide key={img}>
                            <div>
                                <img className='object-cover h-44 sm:h-72 w-full rounded-lg' src={img} alt='screenshot' />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>

        <div className='grid justify-center pb-4'>
            <h2 className='text-xl font-medium my-4'>{t('details.features')}</h2>
            <ul className='text-left list-disc ml-4'>
                {features[i18n.resolvedLanguage].map(feature => <li className='max-w-[50ch]' key={feature}>{feature}</li>)}
            </ul>
        </div>

        <div className='max-w-[800px] mx-auto'>
            <h2 className='text-xl font-medium my-4'>{t('details.technologies')}</h2>
            <div className={`grid grid-cols-3 gap-6 md:gap-10 justify-items-center py-12 px-8 bg-white/10 backdrop-blur-sm rounded-lg shadow-md`}>
                {
                    icons.filter(i => technologies.includes(i.label)).map(i => <SkillsIcon label={i.label} icon={i.icon} key={i.label} />)
                }
            </div>
        </div>
        
        <div className='text-xl font-medium flex flex-col justify-center items-center gap-4 py-8 sm:flex-row sm:gap-16 md:gap-24'>        
            { backend ? 
                <>
                    <div className='grid gap-4'>
                        <p>Backend</p>
                        <a href={backend} className="hover:opacity-50 hover:scale-110 transition-all duration-200" target='_blank' rel='noopener noreferrer'>
                            <FaGithub className='mx-auto' size={40}/>
                        </a>
                    </div>
                    <div className='grid gap-4'>
                        <p>Frontend</p>
                        <a href={github} className="hover:opacity-50 hover:scale-110 transition-all duration-200" target='_blank' rel='noopener noreferrer'>
                            <FaGithub className='mx-auto' size={40}/>
                        </a>
                    </div>
                </> : 
                <>
                    <div className='grid gap-4'>
                        <p>Github</p>
                        <a href={github} className="hover:opacity-50 hover:scale-110 transition-all duration-200" target='_blank' rel='noopener noreferrer'>
                            <FaGithub className='mx-auto' size={40}/>
                        </a>
                    </div>
                </>
            }
            { deploy ? 
                <>
                    <div className='grid gap-4'>
                        <p>Deploy</p>
                        <a href={deploy} className="hover:opacity-50 hover:scale-110 transition-all duration-200" target='_blank' rel='noopener noreferrer'>
                            <BsLaptop className='mx-auto' size={40}/>
                        </a>
                    </div>
                </> :
                <div className='grid gap-4'>
                    <p>Deploy</p>
                    <div after={`${t('details.deploy')}`} className='relative text-sm font-light text-left after:absolute after:left-full after:top-1/4 after:leading-none hover:after:content-[attr(after)] focus:after:content-[attr(after)]'>
                        <BsLaptop className='mx-auto opacity-50' size={40} />
                    </div>
                </div>  
            }
        </div>
        { credits && <div><p className='font-normal max-w-[45ch] mx-auto'>{credits[i18n.resolvedLanguage]}</p></div> }
    </section>
  )
}

export default ProjectDetail