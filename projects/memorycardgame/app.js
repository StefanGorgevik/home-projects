var cards = document.querySelectorAll(".memory-card");
let lockBoard = false;
let hasFlippedCard = false;
let firstCard, secondCard;
var shuffleButton = document.querySelector("#shuffleButton");
function flipCard() {
    if(lockBoard) return;
    if(this === firstCard) return;
    this.classList.add("flip");
    if(!hasFlippedCard) {
        //first click
        hasFlippedCard = true;
        firstCard = this;
        return;
   } 
       //second click
       secondCard = this;
    //do cards match?
       checkForMatch();
}

function checkForMatch() {
    var isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
    isMatch ? disableCards() : unflipCards();
}
function disableCards(){
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);
    resetBoard()
}
function unflipCards() {
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");
        resetBoard();
    }, 1500)
}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [ null, null];
}
(function shuffle() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
    })
})();

// shuffleButton.addEventListener("click", shuffle);
cards.forEach(card => card.addEventListener("click",flipCard));

