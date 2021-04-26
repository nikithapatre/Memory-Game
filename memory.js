const cards = document.querySelectorAll(".memory-card");

let hasFlippedCrad = false;
let firstCard;
let secondCard;
let lock = false; 

function flipCard() {
if(lock) return;
if(this === firstCard) return;

    //this.classList.toggle("flip")
    this.classList.add("flip")
    if (!hasFlippedCrad) {
        // first click
        hasFlippedCrad = true;
        firstCard = this; // clicked card = this;
    } else {
        // second click
        hasFlippedCrad = false; 
        secondCard = this; // clicked card = this;
        checkForMatch();
    }

}

function checkForMatch() {
    // check if cards matches
    if (firstCard.dataset.attribute === secondCard.dataset.attribute) {
        disableCards();
    } else {
        unflipCards();
}
}

function disableCards(){
 // it's a match
 firstCard.removeEventListener("click", flipCard);
 secondCard.removeEventListener("click", flipCard);

 resetBoard(); 
}

function unflipCards(){ //not yet clicked
  lock = true;
    setTimeout(() => {
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");

       resetBoard();
    }, 1500);

}


function resetBoard(){
    [hasFlippedCrad, lock] = [false, false] 
    [firstCard, secondCard] = [null, null]
}


// to shiffle cards
(function shuffle(){
  cards.forEach(card => {
      let randomPosition = Math.floor(Math.random() * 12);
      card.style.order = randomPosition
  })
})();

cards.forEach(card => card.addEventListener("click", flipCard));