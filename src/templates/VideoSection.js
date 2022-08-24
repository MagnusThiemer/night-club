import H2 from "../components/H2";
import VideoPlayer from "../components/VideoPlayer";

const VideoSection = () => {
  return ( 
    <section className="bg-black md:w-4/5 w-11/12 mx-auto mb-44">
      <H2 text='Video' />
      <VideoPlayer />
    </section>
   );
}
 
export default VideoSection;