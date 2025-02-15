import Image from "next/image";

const ChipArea = () => {


  return(
    <div className = " w-20 h-20 grid grid-cols-5">
      <div className = "flex space-y-1 flex-col h-full">
        <Image src={"/chips/bluechip.png"} width = {15} height = {10} alt = "poker chip"/>
      </div>
      <div className = 'flex flex-col h-full'>

      </div>
      <div className = "flex flex-col h-full">

      </div>
      <div className = "flex flex-col h-full">

      </div>
      <div className = "flex flex-col h-full">

      </div>

    </div>
  )
}

export default ChipArea;