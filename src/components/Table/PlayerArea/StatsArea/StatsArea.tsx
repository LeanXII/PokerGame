import { usePokerStore } from "@/store/poker/PokerStore";
import { PlayerAreaProps } from "@/store/types/storeTypes";
import React from "react";


const StatsArea: React.FC<PlayerAreaProps> = ({player}) => {

  const gameStatus = usePokerStore((state) => state.gameStatus)
  const dealerPosition = usePokerStore((state) => state.dealerPosition)
  const bigBlindPosition = usePokerStore((state) => state.bigBlindPosition)
  const smallBlindPosition = usePokerStore((state) => state.smallBlindPosition)
  const players = usePokerStore((state) => state.players)

  return(
    gameStatus === "underway" && (

      <div className = "text-sm h-20 ">
        {dealerPosition === player-1 && (

          <div className = "text-blue-500 text-sm">
            Dealer
        </div>
        )}
        {bigBlindPosition === player-1 && (
          <div className = "text-blue-500 text-sm">
            Big blind
            </div>
        )}
        {smallBlindPosition === player-1 && (
          <div className = "text-blue-500 text-sm">
            Small blind
            </div>
        )}
      <div>
        Funds: ${players[player-1].chips}
      </div>
    </div>
    )
  )
}

export default StatsArea;