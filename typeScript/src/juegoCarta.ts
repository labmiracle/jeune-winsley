class Card {
    constructor(public number: number) {}
  }
  
  class Deck {
    private cards: Card[];
  
    constructor() {
      this.cards = [];
      this.initialize();
    }
  
    private initialize() {
      for (let i = 1; i <= 10; i++) {
        this.cards.push(new Card(i));
      }
    }
  
    drawCard(): Card {
      const randomIndex = Math.floor(Math.random() * this.cards.length);
      return this.cards.splice(randomIndex, 1)[0];
    }
  }
  
  class Player {
    constructor(public name: string) {}
  }
  
  class CardGame {
    private deck: Deck;
    private players: Player[];
  
    constructor() {
      this.deck = new Deck();
      this.players = [];
    }
  
    addPlayer(player: Player) {
      this.players.push(player);
    }
  
    play() {
      const playerCards: { [playerName: string]: Card } = {};
  
      for (const player of this.players) {
        const card = this.deck.drawCard();
        playerCards[player.name] = card;
      }
  
      let highestCard: Card | null = null;
      let winner: Player | null = null;
  
      for (const player of this.players) {
        const card = playerCards[player.name];
  
        if (!highestCard || card.number > highestCard.number) {
          highestCard = card;
          winner = player;
        }
      }
  
      if (winner) {
        console.log(`Winner: ${winner.name} with card number ${highestCard!.number}`);
      } else {
        console.log('It\'s a tie!');
      }
    }
  }
  
  // Crear jugadores
  const player1 = new Player('Player 1');
  const player2 = new Player('Player 2');
  
  // Crear juego de cartas
  const cardGame = new CardGame();
  
  // Agregar jugadores al juego
  cardGame.addPlayer(player1);
  cardGame.addPlayer(player2);
  
  // Jugar
  cardGame.play();
  