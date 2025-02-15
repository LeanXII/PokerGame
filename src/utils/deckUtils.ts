import {
  validateHoleCardsResponse,
  validateNewDeckResponse,
} from "@/store/types/apiTypes";

export const generateDeck = async () => {
  try {
    const response = await fetch(
      "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
    );

    if (!response.ok) {
      throw new Error("Bad response fetching new deck");
    } else {
      const deck = await response.json();
      const validatedDeck = validateNewDeckResponse(deck);

      if (validatedDeck.success) {
        return validatedDeck;
      } else {
        throw new Error("Api returned a failure fetching deck");
      }
    }
  } catch (err) {
    console.error(err);
  }
};

export const drawHoleCards = async (deckId: string) => {
  try {
    const response = await fetch(
      `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`
    );

    if (!response.ok) {
      throw new Error("Bad response fetching hole cards");
    } else {
      const cards = await response.json();
      const validatedHoleCards = validateHoleCardsResponse(cards);

      if (validatedHoleCards.success) {
        return validatedHoleCards;
      } else {
        throw new Error("Api returned a failure fetching hole cards");
      }
    }
  } catch (err) {
    console.error(err);
  }
};
