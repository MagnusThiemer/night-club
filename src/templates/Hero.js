import image1 from "../assets/bg/header_bg_1.jpg"
import image2 from "../assets/bg/header_bg_2.jpg"
import logo from "../assets/icon/Logo.svg"
import bottomLine from "../assets/bottom_line.png"

const Hero = () => {
  const images = [image1, image2];
  const getRandomNumber = () => images[Math.floor(Math.random() * images.length)];

  return ( 
    <div className="grid grid-rows-1 grid-cols-1 place-items-center sm:overflow-hidden bg-red-100" style={{height: '100vh'}}>
      <img src={getRandomNumber()} alt="background image" className="col-start-1 row-start-1 object-cover" style={{height: '100vh'}}/>
      <div className="col-start-1 row-start-1 flex justify-center flex-col md:w-2/5 w-3/5">
        <img src={logo} alt="Night Club logo" className=""/>
        <p className="text-center md:text-2xl text-sm md:tracking-widest tracking-wider uppercase my-4">Have a good time</p>
        <img src={bottomLine} alt="" className=""/>
      </div>
      <div className="min-h-0"></div>
    </div>
   );
}
 
export default Hero;