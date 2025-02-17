import React from "react";

export type Card = {
  code: string,
  image: string
}

export type Player = {
  id: number;
  name: string;
  chips: number;
  cards: Card[];
  isTurn: boolean;
  hasFolded: boolean;
};

export type GameState = {
  players: Player[];
  updatePlayers: (newPlayers: Player[]) => void
  pot: number;
  increasePotBy: (amount: number) => void,
  decreasePotBy: (amount: number) => void,
  currentBet: number;
  updateBet: (newBet: number) => void
  dealerPosition: number;
  updateDealerPosition: (newDealerPosition: number) => void
  bigBlindPosition: number;
  updateBigBlindPosition: (newBigBlindPosition: number) => void
  smallBlindPosition: number;
  updateSmallBlindPosition: (newSmallBlindPosition: number) => void
  gameStatus: string;
  updateGameStatus: (newGameStatus: string) => void
  currentRound: number;
  incrementCurrentRound: () => void
  deckId: string,
  updateDeckId: (newDeckId: string) => void
};

export type GameAction =
  | { type: "CHECK"; payload: { playerId: number } }
  | { type: "CALL"; payload: { playerId: number } }
  | { type: "RAISE"; payload: { playerId: number; betAmount: number } }
  | { type: "BET"; payload: { playerId: number; betAmount: number } }
  | { type: "FOLD"; payload: { playerId: number } }
  | { type: "START_GAME"; payload: {deckId: string; players: Player[]}}
  | {type: "ROTATE_BLINDS"; payload: {playerIds: number[]}}
  | {type: "PAY_SMALL_BLIND"; payload: {pot: number, players: Player[]} }
  | {type: "PAY_BIG_BLIND"; payload: {pot: number, players: Player[]} }



export type PokerContextType = {
  state: GameState;
  dispatch: React.Dispatch<GameAction>;
};

export type CardProps = {
  horizontal?: boolean;
  card?: string
};

export type PlayerCardArea = {
  horizontal?: boolean;
  player: number
};

export type ProviderProps = {
  children: React.ReactNode;
};

export type PlayerLayoutOptions = {
  cardArea: string,
  spriteArea: string,
  statsArea: string,
  chipsArea: string,
  horizontal?: boolean
}

export type PlayerAreaProps = {
  player: number
}


export type ChipDistro = {
  white: number,
  red: number,
  green: number,
  black: number,
  blue: number
  yellow: number
}


