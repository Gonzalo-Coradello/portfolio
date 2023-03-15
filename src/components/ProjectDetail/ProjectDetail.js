import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from "swiper";
import { icons } from '../About/About'
import SkillsIcon from '../About/SkillsIcon';
import { useTranslation } from 'react-i18next';

const ProjectDetail = ({ name, screenshots, description, status, features, technologies, github, backend, deploy, credits }) => {

    const { t, i18n } = useTranslation()

  return (
    <div>
        <h1>{name}</h1>
        <p>{description[i18n.resolvedLanguage]}</p>
        { status && <p>{status[i18n.resolvedLanguage]}</p>}

        <div className='w-[32rem] mx-auto py-8'>
            <Swiper
                modules={[Autoplay]}
                spaceBetween={0}
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
                            <img className='object-scale-down h-72 w-full' src={img} alt='screenshot' />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>

        <ul>
            {features[i18n.resolvedLanguage].map(feature => <li key={feature}>{feature}</li>)}
        </ul>

        <div className=' grid grid-cols-3 md:grid-cols-4 gap-6 md:gap-10 justify-items-center py-12 px-8 bg-white/10 backdrop-blur-sm rounded-lg shadow-md'>
            
            {
                icons.filter(i => technologies.includes(i.label)).map(i => <SkillsIcon label={i.label} icon={i.icon} key={i.label} />)
            }

        </div>
        
            
        <div>
            
            { 
                backend ? 
                    <>
                        <p>Backend: {backend}</p>
                        <p>Frontend: {github}</p>
                    </> : 
                    <p>{github}</p>
            }
            <p>{deploy}</p>
        </div>

        <div>
            <p>{credits[i18n.resolvedLanguage]}</p>
        </div>

    </div>
  )
}

export default ProjectDetail