"use client";

import React, { createContext, useReducer, useContext } from "react";
import {
  type GameState,
  type GameAction,
  type ProviderProps,
  PokerContextType,
  Player,
} from "../types/storeTypes";

import { START_GAME, CHECK, CALL, RAISE, BET, FOLD, ROTATE_BLINDS, PAY_SMALL_BLIND, PAY_BIG_BLIND } from "./ActionTypes";


const initialState: GameState = {
  players: [] as Player[],
  pot: 0,
  currentBet: 0,
  dealerPosition: 0,
  smallBlindPosition: 1,
  bigBlindPosition: 2,
  gameStatus: "waiting",
  currentTurn: 0,
  deckId: "",
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
      return {
        ...state,
        gameStatus: "underway",
        deckId: action.payload.deckId,
        players: action.payload.players,
        currentTurn: state.currentTurn + 1
      };
    case ROTATE_BLINDS:
      return{
        ...state,
        dealerPosition: state.dealerPosition === 5 ? 0 : state.dealerPosition + 1,
        smallBlindPosition: state.smallBlindPosition === 5 ? 0 : state.smallBlindPosition + 1,
        bigBlindPosition: state.bigBlindPosition === 5 ? 0 : state.bigBlindPosition + 1
      }

    case PAY_SMALL_BLIND:
      return{
        ...state,
        pot: action.payload.pot,
        players: action.payload.players
      }

    case PAY_BIG_BLIND:
      return{
        ...state,
        pot: action.payload.pot,
        players: action.payload.players
      }

    default:
      return state;
  }
  return state;
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
