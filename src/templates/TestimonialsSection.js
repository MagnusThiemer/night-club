import { useEffect, useState } from "react";
import axios from "axios";
import Testimonial from "../components/Testimonial";

const TestimonialsSection = () => {
  const [testimonials, setTestimonials] = useState()
  const [index, setIndex] = useState(0)
  useEffect(() => {
    axios.get('http://localhost:4000/testimonials')
    .then(response => {setTestimonials(response.data)})
  }, [])
  return ( 
    <section className="bg-black md:w-4/5 w-11/12 mx-auto mb-44">
      {testimonials && <Testimonial data={testimonials[index]}/>}
      <div className="flex gap-4 justify-center">
        {testimonials && testimonials.map((testimonial, key) => (
        <div 
          id={key}
          key={key} 
          className={`h-4 w-4 ${index === key ? 'bg-primary' : 'bg-white'}`}
          onClick={() => {setIndex(key)}}
          ></div>))}
      </div>
    </section>
   );
}
 
export default TestimonialsSection;