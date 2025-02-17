import { drawHoleCards, generateDeck } from "@/utils/deckUtils";
import { Player, Card} from "../types/storeTypes";
import { usePokerStore } from "./PokerStore";


const ActionHandlers = () => {
  const updatePlayers = usePokerStore((state)=> state.updatePlayers)
  const updateGameStatus = usePokerStore((state) => state.updateGameStatus)
  const updateDeckId = usePokerStore((state) => state.updateDeckId)
  const increasePotBy = usePokerStore((state) => state.increasePotBy)
  const incrementCurrentRound = usePokerStore((state) => state.incrementCurrentRound)
  const smallBlindPosition = usePokerStore((state) => state.smallBlindPosition)
  const bigBlindPosition = usePokerStore((state) => state.bigBlindPosition)



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

  return { handleStartGame, handlePaySmallBlind, handlePayBigBlind };
};

export default ActionHandlers;
