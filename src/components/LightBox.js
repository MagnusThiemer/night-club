const LightBox = ({setLightBox, img, alt}) => {
  return ( 
    <div className="absolute bg-black h-full w-full z-30 top-0" onClick={() => setLightBox(false)}>
      <img src={img} alt={alt} />
    </div>
   );
}
 
export default LightBox;