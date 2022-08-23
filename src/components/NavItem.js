import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useState } from 'react'

const NavItem = (props) => {
  const variants = {
    hover: {
      color: '#ff2a70',
      opacity: 1
    }
  }

const [isHovered, setIsHovered] = useState(false)

  return ( 
    <motion.li variants={variants} whileHover='hover' className='text-white md:my-0 my-2' onMouseOver={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <Link to={props.dest}>
        <h3 className="uppercase mx-2" >
          {props.text}
        </h3>
        <div className={`bg-gradient-to-r from-transparent via-primary to-transparent h-px duration-400 ${isHovered && 'opacity-100'} ${!isHovered && 'opacity-0'}`}></div>
      </Link>
    </motion.li>
   );
}
 
export default NavItem;