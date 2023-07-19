import './Navbar.css'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { BiWorld } from 'react-icons/bi'
import { MdArrowDropDown } from 'react-icons/md'
import { useTranslation } from 'react-i18next'

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false)
  const [openLang, setOpenLang] = useState(false)
  // const [lang, setLang] = useState('ES')

  const { i18n, t } = useTranslation()

  return (
    <nav className='fixed top-0 w-full h-16 text-black shadow-md lg:w-[80%] lg:mx-auto lg:mt-6 bg-white/20 pseudo-backdrop-blur rounded-lg px-4 z-[1000]'>
      <div
        className={`relative w-full h-full flex justify-center items-center z-[100]`}
      >
        <div
          className={
            openMenu ? 'hamburger active lg:hidden' : 'hamburger lg:hidden'
          }
          onClick={() => {
            setOpenMenu(!openMenu)
            setOpenLang(false)
          }}
        >
          <span className='bar'></span>
          <span className='bar'></span>
          <span className='bar'></span>
        </div>
        <ul
          className={`font-light text-base flex flex-col bg-white/20 backdrop-blur-sm rounded-lg shadow-md pb-2 w-full z-100 fixed transition-all duration-300 lg:w-fit lg:flex-row gap-2 lg:gap-24 lg:ml-auto lg:pl-14 lg:backdrop-blur-none lg:shadow-none lg:static lg:z-0 lg:opacity-100 lg:bg-transparent ${
            openMenu ? 'top-16 pt-4 opacity-1' : '-top-full opacity-0'
          }`}
        >
          <li>
            <NavLink
              to='/'
              className={({ isActive }) =>
                isActive
                  ? 'opacity-50 cursor-default'
                  : 'hover:opacity-50 transition-opacity duration-300'
              }
              onClick={() => setOpenMenu(false)}
            >
              {t('header.home')}
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/projects'
              className={({ isActive }) =>
                isActive
                  ? 'opacity-50 cursor-default'
                  : 'hover:opacity-50 transition-opacity duration-300'
              }
              onClick={() => setOpenMenu(false)}
            >
              {t('header.projects')}
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/about'
              className={({ isActive }) =>
                isActive
                  ? 'opacity-50 cursor-default'
                  : 'hover:opacity-50 transition-opacity duration-300'
              }
              onClick={() => setOpenMenu(false)}
            >
              {t('header.about')}
            </NavLink>
          </li>
          <li className='hover:opacity-50 transition-opacity duration-300'>
            <a
              href='mailto:gonzalocoradello@gmail.com'
              onClick={() => setOpenMenu(false)}
            >
              {t('header.contact')}
            </a>
          </li>
        </ul>
        <div
          className='ml-auto cursor-pointer hover:opacity-50 flex transition-opacity duration-300 z-100'
          onClick={() => {
            setOpenLang(!openLang)
            setOpenMenu(false)
          }}
        >
          <BiWorld size={22} />
          <MdArrowDropDown size={22} />
        </div>
        <div>
          <ul
            className={`font-light text-base flex flex-col bg-white/20 backdrop-blur-sm rounded-lg shadow-md w-fit gap-2 pb-2 px-8 pt-4 z-100 absolute right-0 transition-all duration-300 ${
              openLang ? 'top-16 opacity-1' : '-top-full opacity-0'
            }`}
          >
            <li>
              <button
                className={`hover:opacity-50 transition-opacity duration-300 ${
                  i18n.resolvedLanguage === 'es'
                    ? 'disabled opacity-50 cursor-default'
                    : 'cursor-pointer'
                }`}
                onClick={() => {
                  i18n.changeLanguage('es')
                  setOpenLang(false)
                }}
              >
                ES
              </button>
            </li>
            <li>
              <button
                className={`hover:opacity-50 transition-opacity duration-300 ${
                  i18n.resolvedLanguage === 'en'
                    ? 'disabled opacity-50 cursor-default'
                    : 'cursor-pointer'
                }`}
                onClick={() => {
                  i18n.changeLanguage('en')
                  setOpenLang(false)
                }}
              >
                EN
              </button>
            </li>
          </ul>
        </div>
        {/* <div>
          {Object.keys(lngs).map((lng) => (
            <button key={lng} style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }} type="submit" onClick={() => i18n.changeLanguage(lng)}>
              {lngs[lng].nativeName}
            </button>
          ))}
        </div> */}
      </div>
      <div
        className={`w-full h-screen inset-0 bg-transparent -z-50 ${
          openMenu || openLang ? 'fixed' : 'hidden'
        }`}
        onClick={() => {
          setOpenMenu(false)
          setOpenLang(false)
        }}
      />
    </nav>
  )
}

export default Navbar
