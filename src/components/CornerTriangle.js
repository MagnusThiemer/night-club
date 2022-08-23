const CornerTriangle = (props) => {
  return ( 
    <div className={`absolute w-0 h-0 
    ${props.position === 'top-left' && 'border-l-[30px] border-r-[30px] border-b-[30px] border-l-transparent border-r-transparent overflow-hidden border-b-primary -top-[5px] -left-[20px] -rotate-45'}
    ${props.position === 'bottom-right' && 'border-l-[30px] border-r-[30px] border-t-[30px] border-l-transparent border-r-transparent overflow-hidden border-t-primary -rotate-45 -bottom-[5px] -right-[20px]'}
    `}></div>
   );
}
 
export default CornerTriangle;