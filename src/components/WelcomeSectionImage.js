import CornerTriangle from "./CornerTriangle";
import { motion } from 'framer-motion'

const WelcomeSectionImage = ({img, icon, heading, text}) => {
  const variants = {
    hidden: {
      opacity: 0
    },
    hover: {
      opacity: 1,
      transition: {
        duration: 0.5,
        delayChildren: 0.3
      }
    }
  }
  const children = {
    hidden: {
      opacity: 0,
      x: '10vw'
    },
    hover: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: 'easeIn'
      }
    }
  }

  return ( 
    <div className="grid grid-rows-1 grid-cols-1 md:m-4 m-2">
      <img src={img} alt="" className="col-start-1 row-start-1 object-cover min-h-full"/>
      <motion.div variants={variants} whileHover='hover' initial='hidden' className="col-start-1 row-start-1 bg-black border border-t-1 border-b-1 border-y-primary border-x-black relative flex justify-center flex-col items-center md:p-12 p-8">
        {icon}
        <motion.h3 variants={children} className='text-white font-bold uppercase text-2xl my-6 text-center'>{heading}</motion.h3>
        <motion.p variants={children} className="text-white">{text}</motion.p>
        <CornerTriangle position='top-left'/>
        <CornerTriangle position='bottom-right'/>
      </motion.div>
    </div>
   );
}
 
export default WelcomeSectionImage;