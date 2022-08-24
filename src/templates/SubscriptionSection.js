import SubscriptionForm from "../components/SubscriptionForm";

const SubscriptionSection = () => {
  return ( 
  <section className="bg-black md:w-4/5 w-11/12 mx-auto mb-44">
    <h4 className="text-white text-xl mb-6 text-center uppercase">Want the latest night club news</h4>
    <p className="text-white text-center mb-6">Subscribe to our newsletter and never miss an <span className="text-primary">Event</span></p>
    <SubscriptionForm />
  </section> );
}
 
export default SubscriptionSection;