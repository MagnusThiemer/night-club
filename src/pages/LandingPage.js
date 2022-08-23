import EventsSection from "../templates/EventsSection";
import GallerySection from "../templates/GallerySection";
import Hero from "../templates/Hero"
import Nav from "../templates/Nav";
import WelcomeSection from "../templates/WelcomeSection";

const LandingPage = () => {
  return ( 
    <div className="min-w-full bg-black">
      <Hero />
      <Nav />
      <WelcomeSection />
      <EventsSection />
      <GallerySection />
    </div>
   );
}
 
export default LandingPage;