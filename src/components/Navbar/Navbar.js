import { NavLink } from 'react-router-dom'
import { BiWorld } from 'react-icons/bi'
import { MdArrowDropDown } from 'react-icons/md'

const Navbar = () => {
    return (
        <div className="fixed top-0 w-full h-16 text-black shadow-md flex justify-center items-center md:w-[80%] md:mx-auto md:mt-6 bg-transparent backdrop-blur-sm rounded-lg px-4">
            <ul className='font-light text-base flex gap-24 ml-auto pl-14'>
                <li><NavLink to='/' className={({isActive}) => isActive ? 'opacity-50 cursor-default' : 'hover:opacity-50 transition-opacity duration-300'}>Home</NavLink></li>
                <li><NavLink to='/about' className={({isActive}) => isActive ? 'opacity-50 cursor-default' : 'hover:opacity-50 transition-opacity duration-300'}>About</NavLink></li>
                <li className='hover:opacity-50 transition-opacity duration-300'><a href="mailto:gonzalocoradello@gmail.com">Contact</a></li>
            </ul>
            <div className='ml-auto cursor-pointer hover:opacity-50 flex transition-opacity duration-300'>
                <BiWorld />
                <MdArrowDropDown />
            </div>
        </div>
    )
}

export default Navbar