import { type CardProps } from '@/store/types/storeTypes';
import React from 'react';
import Image from 'next/image';
import {clsx} from "ts-clsx";
import { usePoker } from '@/store/poker/Reducer';



export default function Card({horizontal, card}: CardProps) {

  const {state} = usePoker();

  return(
    <div className = {clsx("flex justify-center items-center border border-white ", {"w-14 h-20": !horizontal}, {"w-20 h-14": horizontal})}>
      {card && !horizontal && state.gameStatus === "underway" && (
        <div>
        <Image width = {50} height={50} src={card} alt="playing card" />
          </div>
      )}
      {card && horizontal && state.gameStatus === "underway" && (
        <div className = "rotate-90">
        <Image width= {50}  height={50} src={card} alt="playing card"  />
          </div>

      )}
    </div>
  )

}

