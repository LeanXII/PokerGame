import { type PlayerCardArea } from "@/store/types/storeTypes";
import { usePokerStore } from "@/store/poker/PokerStore";
import Card from "../../Card/Card";
import { clsx } from "ts-clsx";

export default function PlayerCardArea({ horizontal, player }: PlayerCardArea) {

  const players = usePokerStore((state) => state.players)

  let cardImage1;
  let cardImage2;

  const isCurrentPlayer = player-1 === 0;

  if(isCurrentPlayer){
    cardImage1 = players[player-1]?.cards[0].image;
    cardImage2 = players[player-1]?.cards[1].image;
  } else {
    cardImage1 = cardImage2 = "https://deckofcardsapi.com/static/img/back.png";
  }

  return (
    <div className={clsx("flex justify-evenly items-center ", {"flex-col space-y-1 h-24": horizontal}, {"space-x-1 h-20": !horizontal})}>
      {horizontal ? (
        <>
          <Card card = {cardImage1} horizontal={true} />
          <Card card = {cardImage2} horizontal={true} />
        </>
      ) : (
        <>
          <Card card = {cardImage1}/>
          <Card card = {cardImage2}/>
        </>
      )}
    </div>
  );
}
