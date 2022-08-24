
const Lightbox = ({alt, src, setLightboxOn}) => {
  
  return (
    <div className="absolute w-full h-full flex justify-center items-center z-30 bg-black bg-opacity-50" onClick={() => setLightboxOn(false)}>
      <img src={src} alt={alt} />
    </div>
  );
};

export default Lightbox;