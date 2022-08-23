import Hero from "../templates/Hero"
import Nav from "../templates/Nav";
import WelcomeSection from "../templates/WelcomeSection";

const LandingPage = () => {
  return ( 
    <div className="min-w-full bg-black">
      <Hero />
      <Nav />
      <WelcomeSection />
    </div>
   );
}
 
export default LandingPage;