import heroImg from './assets/heroImg.png'
import './Hero.css'
import { BsChevronCompactDown } from 'react-icons/bs'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

const Hero = () => {

    const { t } = useTranslation()

    const [scroll, setScroll] = useState(false);
    useEffect(() => {
    window.addEventListener("scroll", () => {
        setScroll(window.scrollY > 50);
    });
    }, []);

    return (
        <section className="hero h-screen md:h-screen md:w-[80%] grid md:items-center max-w-[1200px] mx-auto">
            <div className='md:flex md:justify-between'>
                <div className='grid justify-center text-left items-center gap-3 md:gap-6'>
                    <h2 className='font-medium text-3xl md:text-4xl lg:text-5xl mt-auto leading-[1.5] md:leading-[1.5] w-max'>{t('hero.part1')}<br />{t('hero.part2')} <span className='gradient'>&lt;Gonzalo&gt;</span></h2>
                    <p className='font-extralight md:text-lg max-w-[35ch] mb-auto leading-7 md:leading-8'>{t('presentation')}</p>
                    {/* <p className='font-extralight md:text-lg max-w-[35ch] mb-auto leading-7 md:leading-8'>I'm a creative Full-Stack Developer from Argentina who loves to create solutions and bring projects to life.</p> */}
                </div>
                <div className='grid justify-center w-3/4 mx-auto md:justify-end md:mb-12 md:mr-[-2rem]'>
                    <img src={heroImg} alt=""/>
                </div>
            </div>
            <a href='#projects' className={`fixed bottom-0 left-0 right-0 flex justify-center flex-col w-fit mx-auto mb-6 md:mb-4 hover:opacity-50 transition-opacity duration-300 ${scroll ? 'fade' : null}`}>
                <p>{t('hero.part3')}</p>
                <BsChevronCompactDown size={35} className={`mx-auto arrowAnimation z-[500]`} />
            </a>
        </section>
    )
}

export default Hero