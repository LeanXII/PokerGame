'use client'

import PokerTable from "@/components/Table/PokerTable/PokerTable";
import GameStats from "@/components/GameStats/GameStats";
import StartModal from "@/components/StartModal/StartModal";
import { usePoker } from "@/store/poker/Reducer";

export default function Poker(){

  const {state} = usePoker();


  return(
    <div className = "h-screen overflow-y-hidden overflow-x-scroll">
      {state.gameStatus === "waiting" && (
        <StartModal />
      )}
      <GameStats />
      <div className = "flex justify-center items-center h-full translate-y-[-7%] p-4">
        <PokerTable />
      </div>
    </div>
  )
}