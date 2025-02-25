import { useState } from "react";
import AllPlayers from '../assets/players.json'
import AvailablePlayers from "./AvailablePlayers";
import playerImg from '../assets/playerImg.webp'

// {
//     "playerId": 7,
//     "name": "Pat Cummins",
//     "country": "Australia",
//     "image": "https://example.com/cummins.jpg",
//     "role": "Bowler",
//     "battingType": "Right-hand bat",
//     "bowlingType": "Right-arm fast",
//     "biddingPrice": "$2.5M",
//     "status": false
//   },
export default function Players() {
    const [avalaible,setAvailable] = useState(true)
    const [playerData, setPlayerData] = useState(AllPlayers.players)

    const availablePlayerArray = playerData
    .filter(player => player.status == false)
    .map(player => <AvailablePlayers 
        key={player.playerId}
        name={player.name}
        country={player.country}
        image={playerImg}
        role={player.role}
        battingType={player.battingType}
        bowlingType={player.bowlingType}
        biddingPrice={player.biddingPrice}
        />)
  return (
    <div>
      <nav className="flex justify-between items-center pb-3">
        <div>
          {avalaible ? <h1 className="font-bold">Available Players</h1> : <h1 className="font-bold">Selected Players(4/6)</h1>}
        </div>
        <div>
            <button type="button" className={`px-3 py-2 rounded-s-2xl ${!avalaible? 'bg-amber-50':'bg-lime-400'}`} onClick={()=>setAvailable(true)} >Available</button>
            <button type="button" className={`px-3 py-2 rounded-e-2xl ${avalaible? 'bg-amber-50':'bg-lime-400'}`} onClick={()=>setAvailable(false)}>Selected (0)</button>
        </div>
      </nav>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-3 max-w-7xl m-auto">
        {availablePlayerArray}
      </div>
    </div>
  );
}
