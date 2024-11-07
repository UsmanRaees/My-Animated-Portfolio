import React, {useState} from 'react'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [isMenuOpen,setIsMenuOpen] = useState<boolean>(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className='container pt-8'>
      <div className='flex justify-between items-center'>
        <div className='text-xl font-extrabold font-serif'>PORTFOLIO-WEBSITE</div>
        <ul className='gap-10 lg:gap-16 hidden md:flex'>
          <li className='menuLink'><a href="#hero">Home</a></li>
          <li className='menuLink'><a href="#about">About</a></li>
          <li className='menuLink'><a href="#projects">Projects</a></li>
          <li className='menuLink'><a href="#skills">Skills</a></li>
          <li className='menuLink'><a href="#contact">Contact</a></li>
        </ul>
        <div className='md:hidden' onClick={toggleMenu}>
          {isMenuOpen ? <AiOutlineClose className='text-accent' size={30}/> : <AiOutlineMenu className='text-accent' size={30}/>}
        </div>
      </div>
      {isMenuOpen && (
        <ul className='flex flex-col gap 6 mt-5md:hidden'>
          <li className='menuLink'>
            <a href="#hero" onClick={toggleMenu}>Home</a>
          </li>
          <li className='menuLink'>
            <a href="#about" onClick={toggleMenu}>About</a>
          </li>
          <li className='menuLink'>
            <a href="#projects" onClick={toggleMenu}>Projects</a>
          </li>
          <li className='menuLink'>
            <a href="#skills" onClick={toggleMenu}>Skills</a>
          </li>
          <li className='menuLink'>
            <a href="#contact" onClick={toggleMenu}>Contact</a>
          </li>
        </ul>
      )}
      <div className='h-[2.5px] w-full mx-auto bg-accent mt-2'></div>
    </div>
  )
}

export default Navbar
