import { type Card, type CurrentBestHand } from "@/store/types/storeTypes"

//Actions ai can take
//bet
//call
//check
//raise
//fold

//Before actions can be determined, ai needs an idea
//of how good its hand is.

//Poker hands from worst to best:
//High card
//Pair
//Two pair
//Three of a kind
//Straight
//Flush
//Full house
//Four of a Kind
//Straight Flush
//Royal Flush

const cardRanks: Record<string, number> = {
  "2": 2,
  "3": 3,
  "4": 4,
  "5": 5,
  "6": 6,
  "7": 7,
  "8": 8,
  "9": 9,
  "10": 10,
  "J": 11,
  "Q": 12,
  "K": 13,
  "A": 14
}

const handRanks: Record<string, number> = {
  "": 0,
  "HC": 1,
  "P": 2,
  "TP": 3,
  "TOAK": 4,
  "S": 5,
  "F": 6,
  "FH": 7,
  "FOAK": 8,
  "SF": 9,
  "RF": 10
}

/*
 * Given the cards it currently has, it needs to know what its current best hand is.
 * That is a good place to start. Future implementations might give it a notion
 * of how close it is to a hand and have that influence its descision as well.
 * Honestly might be best to write functions for each hand type, and just
 * keep track of what the current best is.
*/

const determineHand = (cards: Card[]) => {

  const cardCodes = [];
  for (const card of cards){
    cardCodes.push(card.code)
  }

  const currBestHand: CurrentBestHand = {
    handType: "",
    highCard: 0
  };

  function highCard(cardCodes: string[]): number | undefined {
    let currentHighCard = 0;

    //From the provided cardCodes, determine what the highest is
    for (const cardCode of cardCodes){
      //This is the numberical value ranking of the current card
      if (cardRanks[cardCode[0]] > currentHighCard){
        currentHighCard = cardRanks[cardCode[0]]
      }
    }

    //If the currentHand ranking is less than 1, high
    //card is guarunteed to be the best hand.
    if(handRanks[currBestHand.handType] < 1){
      currBestHand.handType = "HC";
      currBestHand.highCard = currentHighCard;
      return;
    }
    else {
      //This return is the numberical value of the high card
      //As defined by the cardRanks object. this will likely
      //be useful in determining the high card from later
      //hand types.
      return currentHighCard;
    }
  }

  function pair(cardCodes: string[]){

  }


}