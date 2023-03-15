import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from "swiper";
import { icons } from '../About/About'
import SkillsIcon from '../About/SkillsIcon';

const ProjectDetail = ({ name, screenshots, description, features, technologies, github, deploy, credits }) => {
  return (
    <div>
        <h1>{name}</h1>
        <p>{description.es}</p>

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
            {features.map(feature => <li key={feature}>{feature}</li>)}
        </ul>

        <div className=' grid grid-cols-3 md:grid-cols-4 gap-6 md:gap-10 justify-items-center py-12 px-8 bg-white/10 backdrop-blur-sm rounded-lg shadow-md'>
            
            {
                icons.filter(i => technologies.includes(i.label)).map(i => <SkillsIcon label={i.label} icon={i.icon} key={i.label} />)
            }

        </div>
        
    </div>
  )
}

export default ProjectDetail