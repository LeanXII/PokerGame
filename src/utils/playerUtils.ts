

//white -> $1
//red -> $5
//green -> $25
//black -> $100
//blue -> $500


import { ChipDistro } from "@/store/types/storeTypes";





  export const distributeChips = (playerFunds: number): ChipDistro => {



    let runningFunds = playerFunds;


    const chipAmounts = {
      white: 0,
      red: 0,
      green: 0,
      black: 0,
      blue: 0,
      yellow: 0
    }

    //Find if the player needs yellow chips
    const determineYellowChips = runningFunds /1000;
    if(determineYellowChips >= 1){
      const yellowChips = Math.floor(determineYellowChips);
      chipAmounts.yellow = yellowChips;
    runningFunds = runningFunds - (1000*yellowChips)
  }

  //Find if the player needs blue chips
  const determineBlueChips = runningFunds / 500;
  if (determineBlueChips >= 1) {
    const blueChips = Math.floor(determineBlueChips)
    chipAmounts.blue = blueChips;
    runningFunds = runningFunds - (500 * blueChips)
  }

  //Find if the player needs black chips
  const determineBlackChips = runningFunds / 100;
  if (determineBlackChips >= 1) {
    const blackChips = Math.floor(determineBlackChips);
    chipAmounts.black = blackChips;
    runningFunds = runningFunds - (100 * blackChips)
  }

  //Find if the player needs green chips
  const determineGreenChips = runningFunds / 25;
  if (determineGreenChips >= 1) {
    const greenChips = Math.floor(determineGreenChips);
    chipAmounts.green = greenChips;
    runningFunds = runningFunds - (25 * greenChips)
  }

  //Find is the player needs red chips
  const determineRedChips = runningFunds / 5;
  if (determineRedChips >= 1) {
    const redChips = Math.floor(determineRedChips);
    chipAmounts.red = redChips;
    runningFunds = runningFunds - (5 * redChips);
  }

  //Find if the player needs white chips
  const determineWhiteChips = runningFunds;
  if (determineWhiteChips >= 1) {
    const whiteChips = Math.floor(determineWhiteChips);
    chipAmounts.white = whiteChips;
  }

  return chipAmounts;
};









