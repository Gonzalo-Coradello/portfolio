import { useState } from "react"
import { useTranslation } from 'react-i18next'

const Project = ({ id, name, thumbnail, description, url, mainProject }) => {

    const [isHovered, setIsHovered] = useState(false)
    const { t, i18n } = useTranslation()

    return (
        <div className={mainProject ? 'lg:cursor-default' : 'lg:cursor-pointer'}>
            <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} onClick={() => setIsHovered(!isHovered)} className={`projectAnimation relative inline-block bg-white/10 z-10 backdrop-blur-sm rounded-lg shadow-md px-4 py-6 mt-8 md:mt-0 md:px-8 md:py-12`}>
                <img className='rounded-lg' src={thumbnail} alt={name} />
                <div className={`absolute grid justify-center items-end top-0 right-0 px-8 py-3 w-full h-full bg-white/90 rounded-lg transition-[opacity] duration-500 delay-100 ${mainProject && isHovered ? 'lg:opacity-1' : 'opacity-0'}`}>
                    <h2 className="max-w-[35ch]">{description[i18n.resolvedLanguage]}</h2>
                    <h4 className="mt-auto">{t('projects.inst')}</h4>
                </div>
            </div>
            <a href={`/projects/${id}`} >
                <h2 className='text-md md:text-xl font-medium uppercase mt-2 w-fit mx-auto hover:opacity-50 transition-opacity duration-300'>{name}</h2>
            </a>
        </div>
    )
}

export default Project