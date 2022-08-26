import NavItem from "../components/NavItem";
import logo from "../assets/icon/Logo_main.svg"
import { useState } from "react";
import CornerTriangle from "../components/CornerTriangle";
import { motion } from 'framer-motion'

const Nav = () => {
  const [toggle, setToggle] = useState(false)

  const variants = {
    visible: {
      transition: {
        ease: 'easeInOut',
        duration: 500
      }
    }
  }

  return ( 
    <header className="w-full py-6 bg-black border-y border-primary overflow-hidden sticky top-0 z-20">
      <CornerTriangle position='top-left'/>
      <CornerTriangle position='bottom-right'/>
      <nav className="flex justify-between items-center w-4/5 mx-auto flex-wrap">
        <img src={logo} alt="" className=""/>
          <div className="h-7 w-10 md:hidden flex flex-col justify-between" onClick={() => setToggle(!toggle)}>
            <motion.div variants={variants} initial='hidden' animate='visible' className={`w-full h-[2px] bg-white rounded-sm duration-400 origin-center ${toggle && 'rotate-45 translate-y-2 origin-center'}`}></motion.div>
            <motion.div variants={variants} initial='hidden' animate='visible' className={`w-full h-[2px] bg-white rounded-sm duration-400 ${toggle && 'opacity-0'}`}></motion.div>
            <motion.div variants={variants} initial='hidden' animate='visible' className={`w-full h-[2px] bg-white rounded-sm duration-400 origin-center ${toggle && '-rotate-45 -translate-y-4'}`}></motion.div>
          </div>
          <ul className={`md:flex flex-col md:flex-row md:visible md:relative bg-black ${!toggle && `hidden`} ${toggle && 'flex w-full items-end'}`}>
            <NavItem dest='/' text='Home' />
            <NavItem dest='/' text='About Us' />
            <NavItem dest='/blog' text='Blog' />
            <NavItem dest='/' text='Events' />
            <NavItem dest='/gallery' text='Gallery' />
            <NavItem dest='/book' text='Book table' />
            <NavItem dest='/contact' text='Contact Us' />
          </ul>
      </nav>
    </header>
   );
}
 
export default Nav;