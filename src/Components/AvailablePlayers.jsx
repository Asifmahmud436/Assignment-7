export default function AvailablePlayers(props) {
  return (
    <div className="w-96 border-2 border-gray-300 rounded-2xl p-3">
      <img src={props.image} className="rounded-t-2xl" alt="player img" />
      <h3 className="font-bold py-3">{props.name}</h3>
      <div className="flex justify-between items-center">
        <h3>{props.country}</h3>
        <h3 className="px-3 py-2 bg-gray-200 rounded-sm">{props.role}</h3>
      </div>
      <h3 className="font-bold">{props.battingType}</h3>
      <h3 className="font-bold">{props.bowlingType}</h3>
      <div className="flex justify-between items-center">
        <h3 className="font-bold">Price: {props.biddingPrice}</h3>
        <button type="button" className="px-2 py-1 border-2 border-gray-200 rounded-sm font-bold">Choose Player</button>
      </div>
    </div>
  );
}
