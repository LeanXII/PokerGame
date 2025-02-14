
import PokerTable from "@/components/Table/PokerTable/PokerTable";
import GameStats from "@/components/GameStats/GameStats";

export default function Poker(){


  return(
    <div className = "h-screen overflow-y-hidden overflow-x-scroll">
      <GameStats />
      <div className = "flex justify-center items-center h-full translate-y-[-7%] p-4">
        <PokerTable />

      </div>

    </div>
  )
}