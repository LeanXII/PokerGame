import { Dispatch } from "react";
import { drawHoleCards, generateDeck } from "@/utils/deckUtils";
import { GameAction, Player, Card } from "../types/storeTypes";
import { START_GAME, PAY_SMALL_BLIND, PAY_BIG_BLIND } from "./ActionTypes";
import { usePoker } from "./Reducer";
import { flushSync } from "react-dom";

const ActionHandlers = () => {
  const { state } = usePoker();

  const handleStartGame = async (dispatch: Dispatch<GameAction>): Promise<void> => {
    try {
      //generate a new deck
      const newDeck = await generateDeck();

      //initialize all 6 players
      const players: Player[] = [];
      for (let i = 0; i < 6; i++) {
        const player = {
          id: i,
          name: `player${i + 1}`,
          chips: 3745,
          cards: [] as Card[],
          isTurn: false,
          hasFolded: false,
        };

        //draw each players hole cards
        const holeCards = await drawHoleCards(newDeck!.deck_id);
        if (holeCards && holeCards?.cards) {
          holeCards.cards.forEach((card) => {
            player.cards.push({ code: card.code, image: card.image });
          });
        }
        players.push(player);
      }

      //dispatch the action with the payload
      if (newDeck && players.length > 0) {
        dispatch({
          type: START_GAME,
          payload: { deckId: newDeck.deck_id, players: players },
        });
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handlePaySmallBlind = (dispatch: Dispatch<GameAction>) => {
    const updatedPlayers = state.players.map((player) => {
      if (player.id === state.smallBlindPosition) {
        return {
          ...player,
          chips: player.chips - 50,
        };
      }
      return player;
    });
    return new Promise<void>(resolve => {
      flushSync(()=> {
        dispatch({
          type: PAY_SMALL_BLIND,
          payload: { pot: state.pot + 50, players: updatedPlayers },
        });
      })
        resolve();
    })
  };

  const handlePayBigBlind = (dispatch: Dispatch<GameAction>) => {
    const updatedPlayers = state.players.map((player) => {
      if (player.id === state.bigBlindPosition) {
        return {
          ...player,
          chips: player.chips - 100,
        };
      }
      return player;
    });

    return new Promise<void>(resolve => {
      flushSync(()=> {
        dispatch({
          type: PAY_BIG_BLIND,
          payload: { pot: state.pot + 100, players: updatedPlayers },
        });
      })
        resolve();
    })
  };

  return { handleStartGame, handlePaySmallBlind, handlePayBigBlind };
};

export default ActionHandlers;
