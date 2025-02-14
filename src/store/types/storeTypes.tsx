
export type Player = {
  id: string,
  name: string,
  chips: number,
  cards: string[],
  isTurn: boolean,
  hasFolded: boolean
}


export type GameState = {
  players: Player[],
  pot: number,
  currentBet: number,
  dealerPosition: number,
  bigBlindPosition: number,
  smallBlindPosition: number,
  gameStatus: string,
  currentTurn: number
}

export type GameAction =
  | {type: "CHECK"; payload: {playerId: string}}
  | {type: "CALL"; payload: {playerId: string}}
  | {type: "RAISE"; payload: {playerId: string; betAmount: number} }
  | {type: "BET"; payload: {playerId: string; betAmount: number}}
  | {type: "FOLD"; payload: {playerId: string}}

export type CardProps = {
  horizontal?: boolean
}

export type PlayerCardArea = {
  horizontal?: boolean
}