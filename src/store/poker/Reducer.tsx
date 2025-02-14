"use client";

import React, { createContext, useReducer, useContext } from "react";
import {
  type GameState,
  type GameAction,
  type ProviderProps,
  PokerContextType,
} from "../types/storeTypes";
import { START_GAME, CHECK, CALL, RAISE, BET, FOLD } from "./Actions";

const initialState: GameState = {
  players: [],
  pot: 0,
  currentBet: 0,
  dealerPosition: 0,
  bigBlindPosition: 1,
  smallBlindPosition: 2,
  gameStatus: "waiting",
  currentTurn: 0,
};

const pokerReducer = (state: GameState, action: GameAction): GameState => {
  switch (action.type) {
    case CHECK:
      break;

    case CALL:
      break;

    case RAISE:
      break;

    case BET:
      break;

    case FOLD:
      break;
    case START_GAME:

      return {...state, gameStatus: "underway"}


    default:
      return state;
  }
};

const PokerContext = createContext<PokerContextType | null>(null);

export const PokerProvider: React.FC<ProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(pokerReducer, initialState);
  return (
    <PokerContext.Provider value={{ state, dispatch }}>
      {children}
    </PokerContext.Provider>
  );
};

export const usePoker = () => {
  const context = useContext(PokerContext);
  if (!context) {
    throw new Error("No provider found");
  }
  return context;
};
