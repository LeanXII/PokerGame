"use client";

import { PlayerAreaProps, PlayerLayoutOptions } from "@/store/types/storeTypes";
import PlayerCardArea from "./CardAreas/PlayerCardArea";
import Image from "next/image";
import React from "react";
import ChipArea from "./ChipArea/ChipArea";

//Layout options for the player sprite and their table zone
const playerLayouts: Record<string, PlayerLayoutOptions> = {
  player1: {
    cardArea: "absolute bottom-1 right-60 flex",
    spriteArea: "absolute bottom-[-150] right-64 w-20 h-10 flex justify-center items-center",
    specialRoleArea: "",
    chipsArea: "absolute bottom-1 right-36 flex",
    horizontal: false,
  },
  player2: {
    cardArea: "absolute bottom-1 left-60 flex",
    spriteArea: "absolute bottom-[-150] left-64 w-20 h-10 flex justify-center items-center",
    specialRoleArea: "",
    chipsArea: "absolute bottom-1 left-[371px] flex",
    horizontal: false,
  },
  player3: {
    cardArea: "absolute left-5 h-52 flex items-center",
    spriteArea: "absolute left-[-150] w-20 h-10 flex justify-center items-center",
    specialRoleArea: "",
    chipsArea: "absolute left-5 bottom-14",
    horizontal: true,
  },
  player4: {
    cardArea: "absolute top-1 left-60 flex",
    spriteArea: "absolute top-[-150] left-64 w-20 h-10 flex justify-center items-center",
    specialRoleArea: "",
    chipsArea: "absolute top-1 left-36"
    },
  player5: {
    cardArea: "absolute top-1 right-60 flex",
    spriteArea: "absolute top-[-150] right-64 w-20 h-10 flex justify-center items-center",
    specialRoleArea: "",
    chipsArea: "absolute top-1 right-[371px] flex"
  },
  player6: {
    cardArea: "absolute right-5 h-52 flex items-center",
    spriteArea: "absolute right-[-150] w-20 h-10 flex justify-center items-center",
    specialRoleArea: "",
    chipsArea: "absolute right-5 top-[70px]",
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
        <PlayerCardArea playerNumber={parseInt(player.charAt(player.length-1))} horizontal={playerLayoutOptions.horizontal} />
      </div>
      <div className = {playerLayoutOptions.specialRoleArea}>

      </div>
      <div className = {playerLayoutOptions.chipsArea}>
        <ChipArea />
      </div>
      <div className={playerLayoutOptions.spriteArea}>
        <Image
          src={`/players/${player}.png`}
          width={100}
          height={100}
          alt={`${player}`}
        />
      </div>
    </>
  );
};

export default PlayerArea;
