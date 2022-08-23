import axios from "axios";
import { useEffect, useState } from "react";
import EventsCarousel from "../components/EventsCarousel";
import H2 from "../components/H2";

const EventsSection = () => {
  const [eventsData, setEventsData] = useState()
  useEffect(() => {
    axios.get('http://localhost:4000/events')
    .then((response) => setEventsData(response.data))
  }, [])
  return ( 
    <section className="bg-black md:w-4/5 w-11/12 mx-auto mb-44">
      <H2 text='Events of the month'/>
      <EventsCarousel data={eventsData}/>
    </section>
   );
}
 
export default EventsSection;