
import ReactAudioPlayer from 'react-audio-player';

const MusicPlayer = ({songs, currentSong}) => {

	return (
    <div className='flex flex-col md:flex-row items-center '>
      <img src={currentSong.thumb} alt="" />
      <ReactAudioPlayer 
        src={currentSong.audio}
        controls
        className='w-full text-primary'
      />
    </div>
	);
}
 
export default MusicPlayer;