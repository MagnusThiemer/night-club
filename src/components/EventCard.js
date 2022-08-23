const EventCard = ({eventData}) => {
  return ( 
    <div className="md:w-1/2 w-full overflow-hidden inline-block p-4">
      <img src={eventData.asset.url} alt="" className="object-cover min-w-full"/>
      <div className="bg-primary w-full z-10 p-2">
        <p className="text-white">
          <span>{eventData.date} </span>
          <span>{eventData.location}</span>
        </p>
      </div>
    </div>
   );
}
 
export default EventCard;