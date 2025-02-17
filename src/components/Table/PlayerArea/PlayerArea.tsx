"use client";

import { PlayerAreaProps, PlayerLayoutOptions } from "@/store/types/storeTypes";
import PlayerCardArea from "./CardAreas/PlayerCardArea";
import Image from "next/image";
import React from "react";
import ChipArea from "./ChipArea/ChipArea";
import StatsArea from "./StatsArea/StatsArea";

//Layout options for the player sprite and their table zone
const playerLayouts: Record<string, PlayerLayoutOptions> = {
  1: {
    cardArea: "absolute bottom-1 right-60 flex",
    spriteArea: "absolute bottom-[-150] right-64 w-20 h-10 flex justify-center items-center",
    statsArea: "absolute bottom-[-150] right-[160px]",
    chipsArea: "absolute bottom-1 right-36 flex",
    horizontal: false,
  },
  2: {
    cardArea: "absolute bottom-1 left-60 flex",
    spriteArea: "absolute bottom-[-150] left-64 w-20 h-10 flex justify-center items-center",
    statsArea: "absolute bottom-[-150] left-[350px]",
    chipsArea: "absolute bottom-1 left-[371px] flex",
    horizontal: false,
  },
  3: {
    cardArea: "absolute left-5 h-52 flex items-center",
    spriteArea: "absolute left-[-150] w-20 h-10 flex justify-center items-center",
    statsArea: "absolute left-[-150] top-[280px]",
    chipsArea: "absolute left-5 bottom-14 rotate-90",
    horizontal: true,
  },
  4: {
    cardArea: "absolute top-1 left-60 flex",
    spriteArea: "absolute top-[-150] left-64 w-20 h-10 flex justify-center items-center",
    statsArea: "absolute top-[-150] left-[350px]",
    chipsArea: "absolute top-1 left-36 rotate-180"
    },
  5: {
    cardArea: "absolute top-1 right-60 flex",
    spriteArea: "absolute top-[-150] right-64 w-20 h-10 flex justify-center items-center",
    statsArea: "absolute top-[-150] right-[160px]",
    chipsArea: "absolute top-1 right-[371px] rotate-180 flex"
  },
  6: {
    cardArea: "absolute right-5 h-52 flex items-center",
    spriteArea: "absolute right-[-150] w-20 h-10 flex justify-center items-center",
    statsArea: "absolute right-[-150] top-[280]",
    chipsArea: "absolute right-5 top-[70px] -rotate-90",
    horizontal: true
  }
};

const PlayerArea: React.FC<PlayerAreaProps> = ({ player }) => {



  const playerLayoutOptions = playerLayouts[player] || {
    cardArea: "",
    spriteArea: "",
    horizontal: false,
  };


  return (
    <>
      <div className={playerLayoutOptions.cardArea}>
        <PlayerCardArea player={player} horizontal={playerLayoutOptions.horizontal} />
      </div>
      <div className = {playerLayoutOptions.statsArea}>
        <StatsArea player = {player}/>
      </div>
      <div className = {playerLayoutOptions.chipsArea}>
        <ChipArea player = {player} />
      </div>
      <div className={playerLayoutOptions.spriteArea}>
        <Image
          src={`/players/player${player}.png`}
          width={100}
          height={100}
          alt={`player${player}`}
        />
      </div>
    </>
  );
};

export default PlayerArea;
