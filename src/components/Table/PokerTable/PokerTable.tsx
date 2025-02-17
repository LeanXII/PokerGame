import CenterCardArea from "./CenterArea/CenterCardArea";
import PlayerArea from "../PlayerArea/PlayerArea";

export default function PokerTable() {



  return (
    <div className="flex justify-center items-center bg-yellow-950 h-[500px] w-[1000px] rounded-2xl p-4">
      <div className="flex justify-center items-center bg-yellow-400 h-[450px] w-[950px]">
        <div className="relative flex justify-center items-center bg-green-700 h-[430px] w-[930px] p-20">
          <PlayerArea player = {1} />
          <PlayerArea player = {2} />
          <PlayerArea player = {3} />
          <PlayerArea player = {4} />
          <PlayerArea player = {5} />
          <PlayerArea player = {6}/>
          <div>
            <CenterCardArea />
          </div>

        </div>
      </div>
    </div>
  );
}
