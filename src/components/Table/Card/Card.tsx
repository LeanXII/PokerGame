import { type CardProps } from '@/store/types/storeTypes';
import React from 'react';
import {clsx} from "ts-clsx";



export default function Card({horizontal}: CardProps) {

  return(
    <div className = {clsx("flex justify-center items-center border border-white p-1 w-10 h-16", {"w-16 h-10": horizontal})}>

    </div>
  )

}

