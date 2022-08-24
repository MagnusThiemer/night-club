import EventsSection from "../templates/EventsSection";
import Footer from "../templates/Footer";
import GallerySection from "../templates/GallerySection";
import Hero from "../templates/Hero"
import Nav from "../templates/Nav";
import SubscriptionSection from "../templates/SubscriptionSection";
import TestimonialsSection from "../templates/TestimonialsSection";
import WelcomeSection from "../templates/WelcomeSection";

const LandingPage = () => {
  return ( 
    <div className="min-w-full bg-black">
      <Hero />
      <Nav />
      <WelcomeSection />
      <EventsSection />
      <GallerySection />
      <TestimonialsSection />
      <SubscriptionSection />
      <Footer />
    </div>
   );
}
 
export default LandingPage;