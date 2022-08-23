import { motion } from 'framer-motion'
import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery'

const GalleryContainer = ({data}) => {
  const variants = {
    hidden: {
      x: '-1000px'
    },
    visible: {
      x: 0,
      transition: {
        duration: 0.6,
        ease: 'easeInOut'
      }
    },
  }
  return ( 
    <Gallery>
      <motion.div variants={variants} initial='hidden' whileInView='visible' className="flex flex-wrap justify-center">
      {data.map((image, index) => (
        <Item
        key={index}
        id={image.id}
        original={image.asset.url}
        thumbnail={image.asset.url}
        caption={image.description}>
        {({ ref, open }) => (
          <img ref={ref} onClick={open} src={image.asset.url} className='max-h-44'/>
          )}
        </Item>
      ))}
      </motion.div>
    </Gallery>
   );
}
 
export default GalleryContainer;