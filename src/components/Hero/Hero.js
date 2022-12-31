import heroImg from './assets/heroImg.png'

const Hero = () => {
    return (
        <section className="h-screen grid items-center max-w-[1200px] mx-auto">
            <div className='md:flex md:justify-between'>
                <div className='grid justify-center text-left items-center gap-3 md:gap-6'>
                    <h2 className='font-medium text-4xl md:text-5xl mt-auto leading-[1.5] md:leading-[1.5]'>Hello,<br />I'm Gonzalo</h2>
                    <p className='font-extralight md:text-lg max-w-[35ch] mb-auto leading-7 md:leading-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in sem eu metus dignissim scelerisque. Nulla vitae laoreet est.</p>
                </div>
                <div className='grid justify-center'>
                    <img src={heroImg} alt="" />
                </div>
            </div>
            <div className='flex justify-center flex-col'>
                <a href="#projects">check out my work</a>
                <i>V</i>
            </div>
        </section>
    )
}

export default Hero