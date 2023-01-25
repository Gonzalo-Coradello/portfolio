import './Footer.css'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'


const Footer = () => {
    const { t } = useTranslation()

    return (
        <footer className='md:pb-4'>
            <div className="md:w-[80%] mx-auto grid items-center lg:grid-cols-3 gap-8 py-10 px-8 bg-white/20 backdrop-blur-sm rounded-lg shadow-xl mt-12">
                <div className='w-fit mx-auto lg:order-2'>
                    <h2 className='text-xl font-light'>Gonzalo Coradello</h2>
                    <div className='flex justify-around mt-4'>
                        <a href='mailto:gonzalocoradello@gmail.com' className='w-fit hover:opacity-50 hover:scale-110 transition-all duration-200'><FaEnvelope size={25} /></a>
                        <a href='https://www.linkedin.com/in/gonzalo-coradello/' className='w-fit hover:opacity-50 hover:scale-110 transition-all duration-200'><FaLinkedin size={25} /></a>
                        <a href='https://github.com/Gonzalo-Coradello' className='w-fit hover:opacity-50 hover:scale-110 transition-all duration-200'><FaGithub size={25} /></a>
                    </div>
                </div>
                <div className='w-fit mx-auto text-md font-light col-1 lg:order-1'>
                    <ul className='flex gap-4 justify-center'>
                        <li><NavLink to='/' className={({isActive}) => isActive ? 'opacity-50 cursor-default' : 'hover:opacity-50 transition-opacity duration-300'}>{t('header.home')}</NavLink></li>
                        <li><NavLink to='/about' className={({isActive}) => isActive ? 'opacity-50 cursor-default' : 'hover:opacity-50 transition-opacity duration-300'}>{t('header.about')}</NavLink></li>
                        <li className='hover:opacity-50 transition-opacity duration-300'><a href="mailto:gonzalocoradello@gmail.com">{t('header.contact')}</a></li>
                    </ul>
                </div>
                <div className='w-fit mx-auto text-md lg:order-3'>
                    <h4>{t('footer.design')}<a className='footer-gradient hover:opacity-70 transition-opacity duration-500' href="https://www.linkedin.com/in/talia-laborde/" target="_blank" rel="noopener noreferrer">Talia Laborde</a></h4>
                    <h4>{t('footer.illustration')}<a className='footer-gradient hover:opacity-70 transition-opacity duration-500' href='https://www.instagram.com/wiwadd/' target="_blank" rel="noopener noreferrer">wiwadd</a></h4>
                </div>
            </div>
        </footer>
    )
}

export default Footer