import {FaFacebookF, FaTwitter, FaGooglePlus, FaBloggerB, FaSkype} from 'react-icons/fa'
const Footer = () => {
  return ( 
    <footer className="bg-black md:w-4/5 w-11/12 mx-auto mb-44">
      <div className="flex md:flex-row flex-col justify-between items-center">
        <p className="text-white flex-1 mb-6">Stay Connected With Us Night Club</p>
        <div className='flex justify-center flex-1 gap-4 mb-6'>
          <a href="" className='text-white p-2 border border-white rounded'>
            <FaFacebookF />
          </a>
          <a href="" className='text-white p-2 border border-white rounded'>
            <FaTwitter />
          </a>
          <a href="" className='text-white p-2 border border-white rounded'>
            <FaGooglePlus />
          </a>
          <a href="" className='text-white p-2 border border-white rounded'>
            <FaSkype />
          </a>
          <a href="" className='text-white p-2 border border-white rounded'>
            <FaBloggerB />
          </a>
      </div>
        <p className="text-white flex-1 text-left md:text-right">Copyright @ 2018 Night Club psd template all right</p>
      </div>
    </footer>
   );
}
 
export default Footer;