/* eslint-disable react/prop-types */
export default function SelectedPlayers(props){
    return(
        <div className="p-4 mb-4 flex justify-between items-center border-2 border-gray-300 rounded-2xl">
            <div className="flex justify-around items-center">
                <img src={props.image} alt="" className="mr-4 max-w-56 rounded-s-2xl"/>
                <div>
                    <h3 className="font-bold">{props.name}</h3>
                    <p>Batting type: {props.battingType}</p>
                    <p>Bowling type: {props.bowlingType}</p>
                </div>
            </div>
            <div>
                <button type="button" className="px-3 py-1 border-2 border-red-400 rounded-sm text-red-500 font-bold" onClick={()=>props.deletePlayer(props.id)}>Remove</button>
            </div>
        </div>
    )
}