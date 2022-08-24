import ContactForm from "../components/ContactForm";
import H2 from "../components/H2";

const ContactSection = () => {
  return ( 
    <section className="bg-black md:w-4/5 w-11/12 mx-auto mb-44">
      <H2 text='Contact'/>
      <ContactForm />
    </section>
   );
}
 
export default ContactSection;