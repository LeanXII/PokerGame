import React from "react";
import { START_GAME } from "../poker/ActionTypes";


export type Card = {
  code: string,
  image: string
}

export type Player = {
  id: string;
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
  | { type: "CHECK"; payload: { playerId: string } }
  | { type: "CALL"; payload: { playerId: string } }
  | { type: "RAISE"; payload: { playerId: string; betAmount: number } }
  | { type: "BET"; payload: { playerId: string; betAmount: number } }
  | { type: "FOLD"; payload: { playerId: string } }
  | { type: "START_GAME"; payload: {deckId: string; players: Player[]}}

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
  playerNumber: number
};

export type ProviderProps = {
  children: React.ReactNode;
};

export type PlayerLayoutOptions = {
  cardArea: string,
  spriteArea: string,
  specialRoleArea: string,
  chipsArea: string,
  horizontal?: boolean
}

export type PlayerAreaProps = {
  player: string
}


