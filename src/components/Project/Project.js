import { useState } from "react"

const Project = ({ id, name, img, description, url, mainProject }) => {

    const [isHovered, setIsHovered] = useState(false)

    return (
        <div className={mainProject ? null : 'lg:cursor-pointer'}>
            <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => mainProject && setIsHovered(false)} className={`relative inline-block bg-transparent z-10 backdrop-blur-sm rounded-lg shadow-md px-4 py-6 mt-8 md:mt-0 md:px-8 md:py-12 ${isHovered && mainProject ? '' : null}`}>
                <img className='rounded-lg' src={img} alt={name} />
                <div className={`absolute grid justify-center items-end top-0 right-0 px-8 py-3 w-full h-full bg-white/50 rounded-lg transition-[opacity] duration-500 delay-200 ${mainProject && isHovered ? 'lg:opacity-1' : 'opacity-0'}`}>
                    <h2>{description}</h2>
                    <h4 className="mt-auto">Click en el título para visitar la página.</h4>
                </div>
            </div>
            <a href={url}>
                <h2 className='text-md md:text-xl font-medium uppercase mt-2 w-fit mx-auto hover:opacity-50 transition-opacity duration-300'>{name}</h2>
            </a>


            {/* <div className='md:w-4/5 md:justify-self-end md:mr-[-15%] md:mb-8'>
                    <img className='md:blur-sm' src='/images/blackcoffee.jpg' alt='BLACKCOFFEE' />
            </div> */}

{/* || ${mainProject ? 'main-project w-full md:ml-4' : 'md:w-4/5 md:justify-self-end md:mr-[-15%] md:mb-8'} ${hidden && 'absolute top-20 right-[-8rem] max-w-[275px]'} */}

        </div>
    )
}

export default Project