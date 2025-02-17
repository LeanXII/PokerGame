import { usePoker } from "@/store/poker/Reducer"
import RoundOrchestration from "@/store/poker/RoundOrchestration";


export default function GameStats(){

  const {handleRoundStart} = RoundOrchestration();

  const {state} = usePoker();

  return(
    <div className = "bg-neutral-800 min-w-[200px] h-full p-2 overflow-y-hidden rounded-md flex flex-col">
      <div>
        Current Pot: {state.pot}
      </div>
      <div>
        Current Bet: {state.currentBet}
      </div>
      <div>
        Current Turn: {state.currentTurn}
      </div>
      <div>
        <button className = "bg-red-500 rounded-lg p-1" onClick = {handleRoundStart}>
          Begin Round!
        </button>
      </div>
    </div>
  )
}