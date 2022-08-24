import {FaFacebookF, FaTwitter} from 'react-icons/fa'

const Testimonial = ({data}) => {
  return ( 
    <div className="max-w-4xl flex flex-col items-center mx-auto">
      <img src={data.asset.url} alt="" className='mb-6'/>
      <h4 className="text-white text-xl mb-6 text-center uppercase">{data.name}</h4>
      <p className="text-white mb-6 text-center">{data.content}</p>
      <div className='flex gap-4 mb-6'>
        <a href={data.facebook} className='text-white p-2 border border-white rounded'>
          <FaFacebookF />
        </a>
        <a href={data.twitter} className='text-white p-2 border border-white rounded'>
          <FaTwitter />
        </a>
      </div>
    </div>
   );
}
 
export default Testimonial;