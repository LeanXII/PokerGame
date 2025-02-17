import { GameAction, Player } from "../types/storeTypes";


//All my action types
export const CHECK = "CHECK"
export const CALL = "CALL";
export const RAISE = "RAISE"
export const BET = "BET";
export const FOLD = "FOLD";
export const START_GAME = "START_GAME"
export const ROTATE_BLINDS = "ROTATE_BLINDS"
export const PAY_SMALL_BLIND = "PAY_SMALL_BLIND"
export const PAY_BIG_BLIND = "PAY_BIG_BLIND"




export const check = (playerId: number): GameAction => ({
  type: CHECK,
  payload: {playerId}
})

export const call = (playerId: number): GameAction => ({
  type: CALL,
  payload: {playerId}
})

export const raise = (playerId: number, betAmount: number ): GameAction => ({
  type: RAISE,
  payload: {playerId, betAmount}
})

export const bet = (playerId: number, betAmount: number): GameAction => ({
  type: BET,
  payload: {playerId, betAmount}
})

export const startGame = (deckId: string, players: Player[]): GameAction => ({
  type: START_GAME,
  payload: {deckId, players}
})

export const rotateBlinds = (playerIds: number[]): GameAction => ({
  type: ROTATE_BLINDS,
  payload: {playerIds}
})

export const paySmallBlind = (pot: number, players: Player[]) => ({
  type: PAY_SMALL_BLIND,
  payload: {pot, players}
})

export const payBigBlind = (pot: number, players: Player[]) => ({
  type: PAY_BIG_BLIND,
  payload: {pot, players}
})