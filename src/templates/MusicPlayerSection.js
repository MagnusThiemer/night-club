import H2 from "../components/H2";
import { useEffect, useState, useContext, useRef } from 'react';
import MusicPlayer from "../components/MusicPlayer";
import Music from '../assets/media/YouBelongWithMe.mp3'
import track1 from '../assets/content-img/track1.jpg'
import track2 from '../assets/content-img/track2.jpg'
import track3 from '../assets/content-img/track4.jpg'
import track4 from '../assets/content-img/track5.jpg'
import track5 from '../assets/content-img/track_thumb.jpg'
import SongSelection from "./SongSelection";

const MusicPlayerSection = () => {
  let songs = [{
    thumb: track1, audio: Music
  },{
    thumb: track2, audio: Music
  },{
    thumb: track3, audio: Music
  },{
    thumb: track4, audio: Music
  },{
    thumb: track5, audio: Music
  }]
  const [audio, setAudio] = useState(songs[2])

  return ( 
    <section className="bg-black md:w-4/5 w-11/12 mx-auto mb-44">
      <H2 text='Night club track'/>
      <MusicPlayer songs={songs} currentSong={audio}/>
      <SongSelection songs={songs} audio={audio} setAudio={setAudio}/>
    </section>
   );
}
 
export default MusicPlayerSection;