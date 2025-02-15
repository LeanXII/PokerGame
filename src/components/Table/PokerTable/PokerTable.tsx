import CenterCardArea from "./CenterCardArea";
import PlayerArea from "../PlayerArea/PlayerArea";

export default function PokerTable() {



  return (
    <div className="flex justify-center items-center bg-yellow-950 h-[500px] w-[1000px] rounded-2xl p-4">
      <div className="flex justify-center items-center bg-yellow-400 h-[450px] w-[950px]">
        <div className="relative flex justify-center items-center bg-green-700 h-[430px] w-[930px] p-20">
          <PlayerArea player = {"player1"} />
          <PlayerArea player = {"player2"} />
          <PlayerArea player = {"player3"} />
          <PlayerArea player = {"player4"} />
          <PlayerArea player = {"player5"} />
          <PlayerArea player = {"player6"}/>
          <div>
            <CenterCardArea />
          </div>
        </div>
      </div>
    </div>
  );
}
