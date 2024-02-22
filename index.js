let player = {
  name : prompt("What is your name?"),
  chips : 145
}
let cards = []
let sum = 0
let hasBlackJack = false;
let isAlive = false;
let message = '';
let messageEl = document.querySelector("#message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")
let playerEl = document.querySelector("#player-el")
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1


  if (randomNumber === 1) {
    return 11
  } else if (randomNumber >= 10) {
    return 10
  } else {
    return randomNumber
  }






  
}


function startGame() {
  isAlive = true;
  let firstCard = getRandomCard()
  let secondCard = getRandomCard()
  cards = [firstCard, secondCard]
  sum = firstCard + secondCard
  renderGame();
}

function renderGame() {
  if (sum === 21) {
    message = 'You got blackjack!';
    hasBlackJack = true;
  } else if (sum < 21) {
    message = 'do u want to draw a new card?';
    isAlive = true;
  } else {
    message = 'You lost.';
    isAlive = false;
  }
  sumEl.textContent = "Sum: " + sum;
  messageEl.textContent = message
  cardsEl.textContent = "Cards: "
  for (i = 0; i < cards.length; i++) {
     cardsEl.textContent += cards[i] + " "
  }
 
}

function newCard() {

  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
  }

  
}




