import { usePoker } from "@/store/poker/Reducer"
import { distributeChips } from "@/utils/playerUtils";
import Image from "next/image";

const Pot = () => {

  const {state} = usePoker();

  const chipDistro = distributeChips(state.pot)

   return (
      state.gameStatus === "underway" && (
        <div className=" w-20 h-20 grid grid-cols-6">
          <div>
          {chipDistro.yellow != 0 &&
              [...Array(chipDistro.yellow)].map((_, index) => (
                <Image
                  key={index}
                  src={"/chips/yellowchip.png"}
                  width={15}
                  height={10}
                  alt="$1000 Chip"
                />
              ))}
          </div>
          <div className="flex space-y-1 flex-col h-full">
            {chipDistro.blue != 0 &&
              [...Array(chipDistro.blue)].map((_, index) => (
                <Image
                  key={index}
                  src={"/chips/bluechip.png"}
                  width={15}
                  height={10}
                  alt="$500 Chip"
                />
              ))}
          </div>
          <div className="flex flex-col h-full">
            {chipDistro.black != 0 &&
              [...Array(chipDistro.black)].map((_, index) => (
                <Image
                  key = {index}
                  src={"/chips/blackchip.png"}
                  width={15}
                  height={10}
                  alt = "$100 Chip"
                  />
              ))}
          </div>
          <div className="flex flex-col h-full">
            {chipDistro.green != 0 &&
              [...Array(chipDistro.green)].map((_, index) => (
                <Image
                  key = {index}
                  src={"/chips/greenchip.png"}
                  width={15}
                  height={10}
                  alt = "$25 Chip"
                  />
              ))}
          </div>
          <div className="flex flex-col h-full">
          {chipDistro.red != 0 &&
              [...Array(chipDistro.red)].map((_, index) => (
                <Image
                  key = {index}
                  src={"/chips/redchip.png"}
                  width={15}
                  height={10}
                  alt = "$5 Chip"
                  />
              ))}
          </div>
          <div className="flex flex-col h-full">
          {chipDistro.white != 0 &&
              [...Array(chipDistro.white)].map((_, index) => (
                <Image
                  key = {index}
                  src={"/chips/greychip.png"}
                  width={15}
                  height={10}
                  alt = "$1 Chip"
                  />
              ))}
          </div>
        </div>
      )
    );
}

export default Pot;