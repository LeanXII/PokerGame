import {create} from 'zustand';
import {GameState, type Player} from '../types/storeTypes'


// const initialState: GameState = {
//   players: [] as Player[],
//   pot: 0,
//   currentBet: 0,
//   dealerPosition: 0,
//   smallBlindPosition: 1,
//   bigBlindPosition: 2,
//   gameStatus: "waiting",
//   currentTurn: 0,
//   deckId: "",
// };
export const usePokerStore = create<GameState>()((set) => ({
  players: [] as Player[],
  updatePlayers: (newPlayers) => set({players: newPlayers}),
  pot: 0,
  increasePotBy: (amount) => set((state) => ({pot: state.pot + amount})),
  decreasePotBy: (amount) => set((state) => ({pot: state.pot - amount})),
  currentBet: 0,
  updateBet: (newBet) => set({currentBet: newBet}),
  dealerPosition: 0,
  updateDealerPosition: (newPosition) => set({dealerPosition: newPosition}),
  smallBlindPosition: 1,
  updateSmallBlindPosition: (newPosition) => set({smallBlindPosition: newPosition}),
  bigBlindPosition: 2,
  updateBigBlindPosition: (newPosition) => set({bigBlindPosition: newPosition }),
  gameStatus: "waiting",
  updateGameStatus: (newStatus) => set({gameStatus: newStatus}),
  currentRound: 0,
  incrementCurrentRound: () => set((state) => ({currentRound: state.currentRound + 1})),
  deckId: "",
  updateDeckId: (newDeckId) => set({deckId: newDeckId})
}))