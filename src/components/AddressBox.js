import { ImLocation, ImMobile } from "react-icons/im";
import { FaRegEnvelope, FaGlobe } from "react-icons/fa";

const AddressBox = () => {
  return ( 
    <>
      <div className="bg-primary p-6 flex flex-col flex-wrap md:max-h-48">
      <div className='flex gap-6 mb-6'>
        <ImLocation className="text-white text-xl" />
        <address>
          <p className="text-white">04 A, Agora Nagar, Agra</p>
          <p className="text-white">Mumbai National Highway no. 3</p>
          <p className="text-white">Dewas #455001 India</p>
        </address>
      </div>
      <div className="flex gap-6 mb-6">
        <ImMobile className="text-white text-xl"/>
        <p className="text-white">+61 8 5048 4402</p>
      </div>
      <div className="flex gap-6 mb-6">
        <FaRegEnvelope className="text-white text-xl"/>
        <p className="text-white">@Hsoft.com</p>
      </div>
      <div className="flex gap-6 mb-6">
        <FaGlobe className="text-white text-xl"/>
        <p className="text-white">Hsoft.com</p>
      </div>
    </div>
    <div className="mx-auto border-l-[30px] border-r-[30px] border-t-[30px] border-l-transparent border-r-transparent overflow-hidden border-t-primary w-0 h-0"></div>
    </>
   );
}
 
export default AddressBox;