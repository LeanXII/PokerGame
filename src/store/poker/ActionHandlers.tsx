import {Dispatch} from 'react'
import { drawHoleCards, generateDeck } from "@/utils/deckUtils"
import { GameAction, Player, Card } from "../types/storeTypes";
import { START_GAME } from "./ActionTypes";


export const handleStartGame = async (dispatch: Dispatch<GameAction>) => {
  try{
    //generate a new deck
    const newDeck = await generateDeck();

    //initialize all 6 players
    const players: Player[] = [];
    for(let i = 0; i<6; i++){
      const player = {
        id: `player${i+1}`,
        name: `player${i+1}`,
        chips: 50,
        cards:[] as Card[],
        isTurn: false  ,
        hasFolded: false
      }

      //draw each players hole cards
      const holeCards = await drawHoleCards(newDeck!.deck_id)
      if(holeCards && holeCards?.cards){
        holeCards.cards.forEach((card)=>{
          player.cards.push({code: card.code, image: card.image} )
        })
      }
      players.push(player)
    }

    //dispatch the action with the payload
    if(newDeck && players.length>0){
      dispatch({type: START_GAME, payload: {deckId: newDeck.deck_id, players: players}})
      return newDeck;
    }
  } catch(err){
    console.error(err)
  }
}