

//All my action types
export const CHECK = "CHECK"
export const CALL = "CALL";
export const RAISE = "RAISE"
export const BET = "BET";
export const FOLD = "FOLD";




export const check = (playerId: string) => ({
  type: CHECK,
  payload: playerId
})

export const call = (playerId: string) => ({
  type: CALL,
  payload: playerId
})

export const raise = (playerId: string, betAmount: number ) => ({
  type: RAISE,
  payload: [playerId, betAmount]
})

export const bet = (playerId: string, betAmount: number) => ({
  type: BET,
  payload: [playerId, betAmount]
})