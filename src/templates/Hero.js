import image1 from "../assets/bg/header_bg_1.jpg"
import image2 from "../assets/bg/header_bg_2.jpg"
import logo from "../assets/icon/Logo.svg"
import bottomLine from "../assets/bottom_line.png"
import { motion } from 'framer-motion'

const Hero = () => {
  const images = [image1, image2];
  const getRandomImage = () => images[Math.floor(Math.random() * images.length)];

  const logoVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        ease: 'easeIn',
        duration: 0.7
      }
    }
  }
  const bgVariants = {};
  const subLogoVariants = {
    hidden: {
      opacity: 0,
      y: '-5vh'
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ease: 'easeOut',
        duration: 1,
        delay: 1
      }
    }
  }

  return ( 
    <header className="grid grid-rows-1 grid-cols-1 place-items-center sm:overflow-hidden bg-black" style={{minHeight: '100vh'}}>
      <motion.img src={getRandomImage()} alt="background" className="col-start-1 row-start-1 object-cover" style={{minHeight: '100vh'}} variants={bgVariants} initial='hidden' animate='visible'/>
      <div className="col-start-1 row-start-1 flex justify-center flex-col md:w-2/5 w-3/5">
        <motion.img src={logo} alt="Night Club logo" className="" variants={logoVariants} initial='hidden' animate='visible'/>
        <motion.div variants={subLogoVariants} initial='hidden' animate='visible'>
          <p className="text-center text-white md:text-2xl text-sm md:tracking-widest tracking-wider uppercase my-4">Have a good time</p>
          <img src={bottomLine} alt="" className=""/>
        </motion.div>
      </div>
      <div className="min-h-0"></div>
    </header>
   );
}
 
export default Hero;