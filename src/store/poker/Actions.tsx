import { GameAction } from "../types/storeTypes";


//All my action types
export const CHECK = "CHECK"
export const CALL = "CALL";
export const RAISE = "RAISE"
export const BET = "BET";
export const FOLD = "FOLD";
export const START_GAME = "START_GAME"




export const check = (playerId: string): GameAction => ({
  type: CHECK,
  payload: {playerId}
})

export const call = (playerId: string): GameAction => ({
  type: CALL,
  payload: {playerId}
})

export const raise = (playerId: string, betAmount: number ): GameAction => ({
  type: RAISE,
  payload: {playerId, betAmount}
})

export const bet = (playerId: string, betAmount: number): GameAction => ({
  type: BET,
  payload: {playerId, betAmount}
})

export const startGame = (): GameAction => ({
  type: START_GAME
})