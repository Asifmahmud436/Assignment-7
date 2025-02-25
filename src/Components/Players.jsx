import { useState } from "react";
import AllPlayers from '../assets/players.json'
import AvailablePlayers from "./AvailablePlayers";
import playerImg from '../assets/playerImg.webp'
import SelectedPlayers from "./SelectedPlayers";


export default function Players() {
    const [avalaible,setAvailable] = useState(true)
    const [playerData, setPlayerData] = useState(AllPlayers.players)

    const handleSelectPlayers = (id) =>{
        if(selectedPlayerArray.length <=5){
            const newSelectedPlayers = playerData.map(player =>{
                return player.playerId == id ? {...player,status:true} : player;
            })
            setPlayerData(newSelectedPlayers)
        }
    }

    const handleDeletePlayers = (id) =>{
        const newSelectedPlayers = playerData.map(player =>{
            return player.playerId == id ? {...player,status:false} : player;
        })
        setPlayerData(newSelectedPlayers)
        
    }

    const availablePlayerArray = playerData
    .filter(player => player.status == false)
    .map(player => <AvailablePlayers 
        key={player.playerId}
        id={player.playerId}
        name={player.name}
        country={player.country}
        image={playerImg}
        role={player.role}
        battingType={player.battingType}
        bowlingType={player.bowlingType}
        biddingPrice={player.biddingPrice}
        choosePlayer={handleSelectPlayers}
        />)

    const selectedPlayerArray = playerData
    .filter(player => player.status == true)
    .map(player => <SelectedPlayers 
        key={player.playerId}
        id={player.playerId}
        name={player.name}
        country={player.country}
        image={playerImg}
        role={player.role}
        battingType={player.battingType}
        bowlingType={player.bowlingType}
        biddingPrice={player.biddingPrice}
        deletePlayer={handleDeletePlayers}
        />)

    

    console.log(playerData)
    
    

  return (
    <div>
      <nav className="flex justify-between items-center pb-3">
        <div>
          {avalaible ? <h1 className="font-bold">Available Players</h1> : <h1 className="font-bold">Selected Players ({selectedPlayerArray.length}/6)</h1>}
        </div>
        <div>
            <button type="button" className={`px-3 py-2 rounded-s-2xl ${!avalaible? 'bg-amber-50':'bg-lime-400'}`} onClick={()=>setAvailable(true)} >Available</button>
            <button type="button" className={`px-3 py-2 rounded-e-2xl ${avalaible? 'bg-amber-50':'bg-lime-400'}`} onClick={()=>setAvailable(false)}>Selected ({selectedPlayerArray.length})</button>
        </div>
      </nav>
      {avalaible ? <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-3 max-w-7xl m-auto mb-24">
        {availablePlayerArray}
      </div>
       :
      <div>
        {selectedPlayerArray}
      </div>
      }
    </div>
  );
}
