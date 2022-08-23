import EventCard from "./EventCard";
import { useState, useRef, useEffect } from "react";
import { useMediaPredicate } from "react-media-hook";

const EventsCarousel = ({data}) => { 
  const [delay, setDelay] = useState(2500)
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);
  const biggerThan640 = useMediaPredicate("(min-width: 640px)");
  const divide = biggerThan640 ? 50 : 100;
  
    function resetTimeout() {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    }
  
    useEffect(() => {
      if(data){ 
        resetTimeout();
        timeoutRef.current = setTimeout(
          () =>
            setIndex((prevIndex) =>
              prevIndex === data.length - 2 ? 0 : prevIndex + 1
            ),
          delay,
        );
    
        return () => {
          resetTimeout();
        };
      }
    }, [index, data, delay]);
  
    return (
      <div className="slideshow overflow-hidden gap-5" onMouseOver={() => setDelay(50000000)} onMouseLeave={() => setDelay(2500)}>
        <div
          className="slideshowSlider whitespace-nowrap ease-in-out duration-1000"
          style={{ transform: `translate3d(${-index * divide}%, 0, 0)` }}
        >
          {data && data.map((event, index) => 
            <EventCard eventData={event} key={index}/>
          )}
        </div>
        
        <div className="slideshowDots">
          {data && data.map((_, idx) => (
            <div
              key={idx}
              className={`slideshowDot${index === idx ? " active" : ""}`}
              onClick={() => {
                setIndex(idx);
              }}
            ></div>
          ))}
        </div>
      </div>
    );
   ;
}
 
export default EventsCarousel;