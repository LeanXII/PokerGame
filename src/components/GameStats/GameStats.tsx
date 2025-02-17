import { usePokerStore } from "@/store/poker/PokerStore";
import RoundOrchestration from "@/store/poker/RoundOrchestration";


export default function GameStats(){

  const pot = usePokerStore((state) => state.pot)
  const currentBet = usePokerStore((state) => state.currentBet)
  const currentRound = usePokerStore((state) => state.currentRound)

  const {handleRoundStart} = RoundOrchestration();



  return(
    <div className = "bg-neutral-800 min-w-[200px] h-full p-2 overflow-y-hidden rounded-md flex flex-col">
      <div>
        Current Pot: {pot}
      </div>
      <div>
        Current Bet: {currentBet}
      </div>
      <div>
        Current Turn: {currentRound}
      </div>
      <div>
        <button className = "bg-red-500 rounded-lg p-1" onClick = {handleRoundStart}>
          Begin Round!
        </button>
      </div>
    </div>
  )
}