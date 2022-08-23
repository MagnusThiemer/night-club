import GradientLine from "./GradientLine";

const H2 = (props) => {
  return (
    <>
      <h2 className="text-3xl leading-tight text-white text-center uppercase my-12 font-bold">
        {props.text}
        <span className="text-primary">{props.textPrimary}</span>
      </h2>
      <GradientLine/>
    </>
   );
}
 
export default H2;