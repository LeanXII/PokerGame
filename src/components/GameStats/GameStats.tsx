import { usePoker } from "@/store/poker/Reducer"


export default function GameStats(){

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
    </div>
  )
}