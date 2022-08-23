import H2 from "../components/H2";
import WelcomeSectionImage from "../components/WelcomeSectionImage";
import resturantImage from "../assets/content-img/reastaurant_1.jpg"
import clubImage from "../assets/content-img/thumb2.jpg"
import dinnerImage from "../assets/content-img/thumb1.jpg"
import { BiDish, BiDrink } from "react-icons/bi"
import { MdOutlineEmojiPeople } from "react-icons/md";

const WelcomeSection = () => {
  return ( 
    <section className="md:w-4/5 w-11/12 mx-auto mb-44">
      <H2 text='Welcome in night' textPrimary='club'/>
      <div className="flex flex-col md:flex-row justify-between">
        <WelcomeSectionImage img={resturantImage} heading='Restaurant' icon={<BiDish className="text-primary h-20 w-20 p-6 border border-primary rounded"/>} text="The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."/>
        <WelcomeSectionImage img={clubImage} heading='Bar' icon={<BiDrink className="text-primary h-20 w-20 p-6 border border-primary rounded"/>} text="The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."/>
        <WelcomeSectionImage img={dinnerImage} heading='Night Club' icon={<MdOutlineEmojiPeople className="text-primary h-20 w-20 p-6 border border-primary rounded"/>} text="The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."/>
      </div>
    </section>
   );
}
 
export default WelcomeSection;