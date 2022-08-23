import { motion } from 'framer-motion'

const H3 = (props) => {
  return ( 
    <>
    {!props.motion && <h3 className="text-white font-bold uppercase text-2xl my-6">{props.text}</h3>}
    {props.motion && <motion.h3 variants={props.variants} className="text-white font-bold uppercase text-2xl my-6">{props.text}</motion.h3>}
    </>
   );
}
 
export default H3;