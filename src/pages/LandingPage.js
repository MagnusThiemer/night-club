import EventsSection from "../templates/EventsSection";
import Footer from "../templates/Footer";
import GallerySection from "../templates/GallerySection";
import Hero from "../templates/Hero"
import MusicPlayerSection from "../templates/MusicPlayerSection";
import Nav from "../templates/Nav";
import SubscriptionSection from "../templates/SubscriptionSection";
import TestimonialsSection from "../templates/TestimonialsSection";
import VideoSection from "../templates/VideoSection";
import WelcomeSection from "../templates/WelcomeSection";

const LandingPage = () => {
  return ( 
    <div className="min-w-full bg-black">
      <Hero />
      <Nav />
      <WelcomeSection />
      <EventsSection />
      <GallerySection />
      <MusicPlayerSection />
      <VideoSection />
      <TestimonialsSection />
      <SubscriptionSection />
      <Footer />
    </div>
   );
}
 
export default LandingPage;