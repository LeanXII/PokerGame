import React from "react";
import { START_GAME } from "../poker/ActionTypes";


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
  pot: number;
  currentBet: number;
  dealerPosition: number;
  bigBlindPosition: number;
  smallBlindPosition: number;
  gameStatus: string;
  currentTurn: number;
  deckId: string
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

export type StartGameAction = {
  type: typeof START_GAME;
  payload: {deck_id: string}
}

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


