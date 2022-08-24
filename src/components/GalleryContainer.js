import { motion } from 'framer-motion'
import { useState } from 'react'
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
  const [lightboxSrc, setLightboxSrc] = useState();
  const [lightboxAlt, setLightboxAlt] = useState()

  const [lightboxOn, setLightboxOn] = useState(false)
  const handleClick = (event) => {
    setLightboxSrc(event.target.src);
    setLightboxAlt(event.target.alt);
    setLightboxOn(true)
  }

  return ( 
    <>
      {lightboxOn && <Lightbox src={lightboxSrc} alt={lightboxAlt} setLightboxOn={setLightboxOn}/>}
      <motion.div variants={variants} initial='hidden' whileInView='visible' className='overflow-x-hidden flex flex-row flex-wrap justify-center'>
        {data && data.map((image, index) => (
          <img src={image.asset.url} alt={image.description} key={index} className='max-h-[200px]' onClick={(event) => handleClick(event)}/>
        ))}
      </motion.div>
      
    </>
   );
}
 
export default GalleryContainer;