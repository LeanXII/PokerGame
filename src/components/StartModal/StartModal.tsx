'use client'

import {useState} from 'react'
import ActionHandlers from '@/store/poker/ActionHandlers'
import { usePoker } from "@/store/poker/Reducer"

export default function StartModal(){
  const [showModal, setShowModal] = useState<boolean>(true)
  const {dispatch} = usePoker()

  const {handleStartGame} = ActionHandlers();



  const handleStartGameClick = () => {
    setShowModal(false)
    setTimeout(()=>{
      handleStartGame(dispatch)
    }, 600)
  }

  return(
    <div className = {`fixed inset-0 flex flex-col justify-center items-center bg-black transition-opacity ease-in-out duration-600 bg-opacity-90 z-50 ${showModal ? "opacity-100" : "opacity-0"}`}>
      <div className = "h-[200px] w-[200px] bg-neutral-900 flex flex-col p-5 justify-evenly items-center rounded-lg">
        <label htmlFor = "new-game">
          Start a new game!
        </label>
        <button id="new-game" className = "bg-green-500 w-full rounded-lg text-black" onClick={handleStartGameClick}>
          Start
        </button>


      </div>
    </div>
  )
}