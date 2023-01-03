import heroImg from './assets/heroImg.png'
import './Hero.css'
import { BsChevronCompactDown } from 'react-icons/bs'


const Hero = () => {
    return (
        <section className="h-screen grid items-center max-w-[1200px] mx-auto">
            <div className='md:flex md:justify-between'>
                <div className='grid justify-center text-left items-center gap-3 md:gap-6'>
                    <h2 className='font-medium text-4xl md:text-5xl mt-auto leading-[1.5] md:leading-[1.5]'>Hello,<br />I'm <span className='gradient'>&lt;Gonzalo&gt;</span></h2>
                    <p className='font-extralight md:text-lg max-w-[35ch] mb-auto leading-7 md:leading-8'>I'm a creative Full-Stack Developer from Argentina who loves to create solutions and bring projects to life.</p>
                </div>
                <div className='grid justify-center'>
                    <img src={heroImg} alt=""/>
                </div>
            </div>
            <a href='#projects' className='flex justify-center flex-col w-fit mx-auto hover:opacity-50 transition-opacity duration-300'>
                <p>check out my work</p>
                <BsChevronCompactDown size={35} className='mx-auto arrowAnimation' />
            </a>
        </section>
    )
}

export default Hero