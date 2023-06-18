"use strict";
class Card {
    constructor(number) {
        this.number = number;
    }
}
class Deck {
    constructor() {
        this.cards = [];
        this.initialize();
    }
    initialize() {
        for (let i = 1; i <= 10; i++) {
            this.cards.push(new Card(i));
        }
    }
    drawCard() {
        const randomIndex = Math.floor(Math.random() * this.cards.length);
        return this.cards.splice(randomIndex, 1)[0];
    }
}
class Player {
    constructor(name) {
        this.name = name;
    }
}
class CardGame {
    constructor() {
        this.deck = new Deck();
        this.players = [];
    }
    addPlayer(player) {
        this.players.push(player);
    }
    play() {
        const playerCards = {};
        for (const player of this.players) {
            const card = this.deck.drawCard();
            playerCards[player.name] = card;
        }
        let highestCard = null;
        let winner = null;
        for (const player of this.players) {
            const card = playerCards[player.name];
            if (!highestCard || card.number > highestCard.number) {
                highestCard = card;
                winner = player;
            }
        }
        if (winner) {
            console.log(`Winner: ${winner.name} with card number ${highestCard.number}`);
        }
        else {
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
