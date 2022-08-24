import H2 from "../components/H2";
import axios from "axios";
import { useEffect, useState } from "react";
import GalleryContainer from "../components/GalleryContainer";

const GallerySection = () => {
  const [data, setData] = useState()
  useEffect(() => {
    axios.get('http://localhost:4000/gallery')
    .then(response => setData(response.data))
  }, [])
  return ( 
    <section className="bg-black w-full mx-auto mb-44 overflow-x-hidden">
      <H2 text='Gallery'/>
      {data && <GalleryContainer data={data}/>}
    </section>
   );
}
 
export default GallerySection;