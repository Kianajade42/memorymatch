class Match {
    constructor(totalTime, cards){
        this.cardsArray = cards;
        this.totalTime = totalTime;
        this.timeRemaining = totalTime;
        this.timer = document.getElementById('time-remaining');
        this.ticker =document.getElementById('flips');

    }
    startGame(){
        this.cardToCheck = null;
        this.totalClicks = 0;
        this.timeRemaining = this.totalTime;
        this.matchedCards = [];
        this.busy = true;
        this.shuffleCards();
    }
 
    flipCard(card) {
        if(this.canFlipCard(card)){
            this.totalClicks++;
            this.ticker.innerText = this.totalClicks;
            card.classList.add('visible');
        }
    }
     shuffleCards(){
         for(let i = this.cardsArray.length - 1; i > 0; i--){
             let randomIndex = Math.floor(Math.random() * (i+1));
             this.cardsArray[randomIndex].style.order = i;
             this.cardsArray[i].style.order = randomIndex;

         }
     }
    canFlipCard(card){
        return true;
        // return !;this.busy && !this.matchedCards.includes(card) && card !== this.cardToCheck
    }
}

function ready(){
    let cards = Array.from(document.getElementsByClassName('card'));
    let game = new Match(150, cards);
      game.startGame();
      cards.forEach(card => {
        card.addEventListener('click',() => {
            game.flipCard(card);
        })
    })
}

if(document.readyState === 'loading'){
    document.addEventListener('DOMcontentLoaded', ready())
} else {
        ready(); 
        
}