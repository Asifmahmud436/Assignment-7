export default function AvailablePlayers(props){
    return(
        <div className="border-2 border-b-amber-950">
            <h3>{props.name}</h3>
            <h3>{props.country}</h3>
            <h3>{props.role}</h3>
            <h3>{props.battingType}</h3>
            <h3>{props.bowlingType}</h3>
            <h3>{props.biddingPrice}</h3>
            <button type="button" className="btn-">Select Player</button>
        </div>
    )
}