import heroImg from './assets/heroImg.png'
import './Hero.css'
import { BsChevronCompactDown } from 'react-icons/bs'
import { useEffect, useState } from 'react'

const Hero = () => {

    const [scroll, setScroll] = useState(false);
    useEffect(() => {
    window.addEventListener("scroll", () => {
        setScroll(window.scrollY > 50);
    });
    }, []);

    return (
        <section className="hero h-screen md:h-screen grid md:items-center max-w-[1200px] mx-auto">
            <div className='md:flex md:justify-between'>
                <div className='grid justify-center text-left items-center gap-3 md:gap-6'>
                    <h2 className='font-medium text-3xl md:text-5xl mt-auto leading-[1.5] md:leading-[1.5]'>Hola,<br />soy <span className='gradient'>&lt;Gonzalo&gt;</span></h2>
                    <p className='font-extralight md:text-lg max-w-[35ch] mb-auto leading-7 md:leading-8'>Soy un desarrollador Full-Stack de Argentina que ama crear soluciones y hacer proyectos realidad.</p>
                    {/* <p className='font-extralight md:text-lg max-w-[35ch] mb-auto leading-7 md:leading-8'>I'm a creative Full-Stack Developer from Argentina who loves to create solutions and bring projects to life.</p> */}
                </div>
                <div className='grid justify-center w-3/4 mx-auto lg:justify-end'>
                    <img src={heroImg} alt=""/>
                </div>
            </div>
            <a href='#projects' className={`fixed bottom-0 left-0 right-0 flex justify-center flex-col w-fit mx-auto mb-6 md:mb-4 hover:opacity-50 transition-opacity duration-300 ${scroll ? 'fade' : null}`}>
                <p>check out my work</p>
                <BsChevronCompactDown size={35} className={`mx-auto arrowAnimation z-[500]`} />
            </a>
        </section>
    )
}

export default Hero