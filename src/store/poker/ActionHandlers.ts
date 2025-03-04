import { drawHoleCards, generateDeck } from "@/utils/deckUtils";
import { Player, Card} from "../types/storeTypes";
import { usePokerStore } from "./PokerStore";


const ActionHandlers = () => {
  const updatePlayers = usePokerStore((state)=> state.updatePlayers)
  const updateGameStatus = usePokerStore((state) => state.updateGameStatus)
  const updateDeckId = usePokerStore((state) => state.updateDeckId)
  const increasePotBy = usePokerStore((state) => state.increasePotBy)
  const incrementCurrentRound = usePokerStore((state) => state.incrementCurrentRound)
  const currentRound = usePokerStore((state) => state.currentRound);
  const smallBlindPosition = usePokerStore((state) => state.smallBlindPosition)
  const updateSmallBlindPosition = usePokerStore((state) => state.updateSmallBlindPosition);
  const bigBlindPosition = usePokerStore((state) => state.bigBlindPosition)
  const updateBigBlindPosition = usePokerStore((state) => state.updateBigBlindPosition);
  const dealerPosition = usePokerStore((state) => state.dealerPosition);
  const updateDealerPosition = usePokerStore((state) => state.updateDealerPosition);



  const handleStartGame = async (): Promise<void> => {
    try {
      //generate a new deck
      const newDeck = await generateDeck();
      if(newDeck) updateDeckId(newDeck.deck_id)
      //initialize all 6 players
      const players: Player[] = [];
      for (let i = 0; i < 6; i++) {
        const player = {
          id: i,
          name: `player${i + 1}`,
          chips: 3745,
          cards: [] as Card[],
          isTurn: false,
          hasFolded: false,
        };

        //draw each players hole cards
        const holeCards = await drawHoleCards(newDeck!.deck_id);
        if (holeCards && holeCards?.cards) {
          holeCards.cards.forEach((card) => {
            player.cards.push({ code: card.code, image: card.image });
          });
        }
        players.push(player);
      }

      incrementCurrentRound();
      updatePlayers(players);
      updateGameStatus("underway");


    } catch (err) {
      console.error(err);
    }
  };

  const handleRotatePositions = () => {
    if(currentRound != 1) {
      if(dealerPosition === 5){
        updateDealerPosition(0)
      } else {
        updateDealerPosition(dealerPosition + 1);
      }

      if(smallBlindPosition === 5){
        updateSmallBlindPosition(0)
      } else {
        updateSmallBlindPosition(smallBlindPosition + 1);
      }

      if(bigBlindPosition === 5){
        updateBigBlindPosition(0)
      } else {
        updateBigBlindPosition(bigBlindPosition + 1);
      }
    }
  }

  const handlePaySmallBlind = () => {
    const updatedPlayers = usePokerStore.getState().players.map((player) => {
      if (player.id === smallBlindPosition) {
        return {
          ...player,
          chips: player.chips - 50,
        };
      }
      return player;
    });

    updatePlayers(updatedPlayers);
    increasePotBy(50)
  };

  const handlePayBigBlind = () => {
    const updatedPlayers = usePokerStore.getState().players.map((player) => {
      if (player.id === bigBlindPosition) {
        return {
          ...player,
          chips: player.chips - 100,
        };
      }
      return player;
    });

    updatePlayers(updatedPlayers)
    increasePotBy(100)

  };

  const handleAITurn = () => {

  }

  return { handleStartGame, handleRotatePositions, handlePaySmallBlind, handlePayBigBlind, handleAITurn };
};

export default ActionHandlers;
