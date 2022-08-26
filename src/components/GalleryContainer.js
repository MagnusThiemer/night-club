import { motion } from 'framer-motion'
import { useState } from 'react'
import CornerTriangle from './CornerTriangle';
import Lightbox from './Lightbox';


const GalleryContainer = ({data}) => {

  const variants = {
    hidden: {
      x: '-50vw'
    },
    visible: {
      x: 0,
      transition: {
        duration: 0.6,
        ease: 'easeInOut'
      }
    },
  }
  const hoverVariants = {
    hidden: {
      opacity: 0,
      x: 0
    },
    hover: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delayChildren: 0.3
      }
    }
  }
  const children = {
    hidden: {
      opacity: 0,
      x: 0
    },
    hover: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.1,
        ease: 'easeIn'
      }
    }
  }


  const [lightboxSrc, setLightboxSrc] = useState();
  const [lightboxAlt, setLightboxAlt] = useState()
  const [lightboxOn, setLightboxOn] = useState(false)
  
  const handleClick = (event) => {
    setLightboxSrc(event.target.parentNode.parentNode.querySelector('img').src);
    setLightboxAlt(event.target.parentNode.parentNode.querySelector('img').alt);
    setLightboxOn(true)
  }

  return ( 
    <>
      {lightboxOn && <Lightbox src={lightboxSrc} alt={lightboxAlt} setLightboxOn={setLightboxOn}/>}
      <motion.div variants={variants} initial='hidden' whileInView='visible' className='overflow-x-hidden flex flex-row flex-wrap justify-center'>
        {data && data.map((image, index) => (
          <div key={index} className='grid grid-rows-1 grid-cols-1 ' onClick={(event) => handleClick(event)}>
            <img src={image.asset.url} alt={image.description}  className='max-h-[200px] col-start-1 row-start-1' onClick={(event) => handleClick(event)}/>
            <motion.div variants={hoverVariants} whileHover='hover' initial='hidden' className="col-start-1 row-start-1 bg-black bg-opacity-50" >
              <motion.div variants={children} whileHover='hover' initial='hidden' className="relative h-full w-full">
                <CornerTriangle position='top-left'/>
                <CornerTriangle position='bottom-right'/>
              </motion.div>
            </motion.div>
          </div>
        ))}
      </motion.div>
      
    </>
   );
}
 
export default GalleryContainer;