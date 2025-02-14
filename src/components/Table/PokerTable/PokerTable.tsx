import CenterCardArea from "../CardAreas/CenterCardArea";
import PlayerCardArea from "../CardAreas/PlayerCardArea";

export default function PokerTable() {
  return (
    <div className="flex justify-center items-center bg-yellow-950 h-[500px] w-[1000px] rounded-2xl p-4">
      <div className="flex justify-center items-center bg-yellow-400 h-[450px] w-[950px]">
        <div className="relative flex justify-center items-center bg-green-700 h-[430px] w-[930px] p-20">
          <div className="absolute top-1 left-60 flex">
            <PlayerCardArea />
          </div>
          <div className="absolute top-1 right-60 flex">
            <PlayerCardArea />
          </div>
          <div className = "absolute right-1 flex">
            <PlayerCardArea horizontal = {true}/>
          </div>
          <div className="absolute bottom-1 right-60 flex">
            <PlayerCardArea />
          </div>
          <div className="absolute bottom-1 left-60 flex">
            <PlayerCardArea />
          </div>
          <div className = "absolute left-1 flex">
            <PlayerCardArea horizontal = {true} />
          </div>

          <div>
            <CenterCardArea />
          </div>
        </div>
      </div>
    </div>
  );
}
