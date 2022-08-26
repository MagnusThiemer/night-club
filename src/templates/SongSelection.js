import CornerTriangle from "../components/CornerTriangle";

const SongSelection = ({songs, audio, setAudio}) => {
  return ( 
    <div className="flex justify-center">
      {audio && songs.map((item, index) => 
        <div key={index} className='max-w-full h-auto w-auto relative ' id={`song${index}`} onClick={() => {setAudio(songs[index])}}>
          <img src={item.thumb} alt="" className=""/>
          {audio.thumb === item.thumb && 
            <>
                <CornerTriangle position='top-left'/>
                <CornerTriangle position='bottom-right'/>
            </>
            }
        </div>
      )}
    </div>
   );
}
 
export default SongSelection;