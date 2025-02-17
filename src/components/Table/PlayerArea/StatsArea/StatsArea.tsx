import { usePoker } from "@/store/poker/Reducer";
import { PlayerAreaProps } from "@/store/types/storeTypes";
import React from "react";


const StatsArea: React.FC<PlayerAreaProps> = ({player}) => {

  const {state} = usePoker();



  return(
    state.gameStatus === "underway" && (

      <div className = "text-sm h-20 ">
        {state.dealerPosition === player-1 && (

          <div className = "text-blue-500 text-sm">
            Dealer
        </div>
        )}
        {state.bigBlindPosition === player-1 && (
          <div className = "text-blue-500 text-sm">
            Big blind
            </div>
        )}
        {state.smallBlindPosition === player-1 && (
          <div className = "text-blue-500 text-sm">
            Small blind
            </div>
        )}
      <div>
        Funds: ${state.players[player-1].chips}
      </div>
    </div>
    )
  )
}

export default StatsArea;