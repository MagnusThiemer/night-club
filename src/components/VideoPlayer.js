
import video from '../assets/media/space.mp4'
import CornerTriangle from './CornerTriangle';

import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { ImLocation, ImMobile } from "react-icons/im";

const VideoPlayer = () => {

  return ( 
    <>
      <div className='relative max-w-3xl mx-auto'>
        <video id='video' className='md:max-w-3xl w-full mx-auto' controls>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video> 
        <CornerTriangle position='top-left' />
        <CornerTriangle position='bottom-right' />
      </div>
      <div className="flex justify-center gap-6">
        <div className="p-3 border border-white rounded">
          <FaArrowLeft className='text-white text-2xl'/>
        </div>
        <div className="p-3 border border-white rounded">
          <FaArrowRight className='text-white text-xl' />
        </div>

      </div>
    </>
   );
}
 
export default VideoPlayer;