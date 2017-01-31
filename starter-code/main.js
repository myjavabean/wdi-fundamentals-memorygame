var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay=[];

//Creates an HTML element for each card.
/* create element only once:
var cardElement = document.createElement("div");
cardElement.className = "card";

for (var i = 0; i < cards; i++) {
    gameBoard[0].appendChild(cardElement);
}
*/



var createBoard = function() {
    //Give div an id of game-board
    var gameBoard = document.getElementById('game-board');
    console.log(gameBoard);

    for (var i = 0; i < cards.length; i++) {
        var cardElement = document.createElement("div");
        cardElement.className = 'card';

        //Set the card's 'data-card' to be the element of the array
        //data - attributes are meant to store data about an element that is not tied to a style, i.e., 'king'
        cardElement.setAttribute('data-card', cards[i]);

        //Add a click event listener to each card element that runs a function isTwoCards
        cardElement.addEventListener('click', isTwoCards);

        //Append it to parent element
        gameBoard.appendChild(cardElement);
    }
}

function isTwoCards() {
    //Check to see if there are cards in play
    //Add card to array of cards in play, it gives me access to the card the user clicked on
    cardsInPlay.push(this.getAttribute('data-card'));
    //If I have two cards in play, check for a match
    if (cardsInPlay.length === 2) {
        //Pass the cardsInPlay as an argument to the isMatch function
        isMatch(cardsInPlay);
        //Clear cards in play array for my next try
        cardsInPlay = [];
    }
}

function isMatch(cards) {
    if (cards[0] === cards[1]) {
        alert("You found a match!");
     } else {
       alert("Sorry, try again.");
    }
}

createBoard();
