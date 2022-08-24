import ContactSection from "../templates/ContactSection";
import Footer from "../templates/Footer";
import Nav from "../templates/Nav";

const ContactPage = () => {
  return ( 
    <div className="min-w-full bg-black">
      <Nav />
      <ContactSection />
      <Footer />
    </div>
    );
}
 
export default ContactPage;