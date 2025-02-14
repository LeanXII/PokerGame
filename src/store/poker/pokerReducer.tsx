import { GameState, GameAction } from '../types/storeTypes';

const initialState: GameState = {
  players: [],
  pot: 0,
  currentBet: 0,
  dealerPosition: 0,
  bigBlindPosition: 1,
  smallBlindPosition: 2,
  gameStatus: "waiting",
  currentTurn: 0

}

export const pokerReducer = (state = initialState, action: GameAction): GameState => {
  switch(action.type){
    case "CHECK":


      break;

    case "CALL":

      break;

    case "RAISE":

      break;

    case "BET":

      break;

    case "FOLD":

      break;

    default:
      return state;

  }
}

