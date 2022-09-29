class Match {

    constructor(totalTime, cards){
        this.cardsArray = cards;
        this.totalTime = totalTime;
        this.timeRemaining = totalTime;
        this.timer = document.getElementById('timer');
        this.ticker = document.getElementById('flips');
        
    }

    startGame(){
        this.shuffleCards();
        this.cardToCheck = null;
        this.totalClicks = 0;
        this.timeRemaining = this.totalTime;
        this.matchedCards = [];
        this.busy = true;
        setTimeout(() => {
            this.shuffleCards();
            this.countDown = this.startCountDown();
            this.busy = false;
        }, 500);
        this.hideCards();
        this.timer.innerText = this.timeRemaining;
        this.ticker.innerText = this.totalClicks;
    }

     hideCards(){
         this.cardsArray.forEach(card => {
             card.classList.remove('visible');
         });
     }
     startCountDown(){

         return setInterval(() => {
             this.timeRemaining--;
             this.timer.innerText = this.timeRemaining;
             if(this.timeRemaining === 0)
             this.gameOver();
         }, 1000);
     }

            
        gameOver(){
            clearInterval(this.countDown)
            document.getElementById('game-over-text').classList.add('visible')
    }
          win() {
            clearInterval(this.countDown);
            document.getElementById('win-text').classList.add('visible');
    }


  shuffleCards(){
         for(let i = this.cardsArray.length - 1; i > 0; i--){
             let randomIndex = Math.floor(Math.random() * (i+1));
             this.cardsArray[randomIndex].style.order = i;
             this.cardsArray[i].style.order = randomIndex;
         }
     }
       getCard(card) {
        return card.getElementsByClassName('face')[0].src;
    }

      canFlipCard(card){
        //  return true;
         return !this.busy && !this.matchedCards.includes(card) && card !== this.cardToCheck
    }

    flipCard(card) {
        if(this.canFlipCard(card)){
            this.totalClicks++;
            this.ticker.innerText = this.totalClicks;
            card.classList.add('visible');
            if(this.cardToCheck)
            this.checkForCardMatch(card);
            else
            this.cardToCheck = card;  
        }
    
    }

      checkForCardMatch(card) {
        if(this.getCard(card) === this.getCard(this.cardToCheck))
            this.cardMatch(card, this.cardToCheck);
        else 
            this.cardMisMatch(card, this.cardToCheck);

        this.cardToCheck = null;
    }
     cardMatch(card1, card2) {
        this.matchedCards.push(card1);
        this.matchedCards.push(card2);
        if(this.matchedCards.length === this.cardsArray.length)
            this.win(); 
    }
       cardMisMatch(card1, card2) {
        this.busy = true;
        setTimeout(() => {
            card1.classList.remove('visible');
            card2.classList.remove('visible');
            this.busy = false;
        }, 1000);
    }
   
}

function ready(){
    let overlays = Array.from(document.getElementsByClassName('overlay-text'));
    let cards = Array.from(document.getElementsByClassName('card'));
    let game = new Match(150, cards);
    
    overlays.forEach(overlay => {
        overlay.addEventListener('click', () => {
            overlay.classList.remove('visible');
            game.startGame();
        });
    });

      cards.forEach(card => {
        card.addEventListener('click',() => {
            game.flipCard(card);
        });
    });
   
}

if(document.readyState === 'loading'){
    document.addEventListener('DOMcontentLoaded', ready(), fetchUsers(),fetchGames())
} else {
        ready(),fetchUsers(),fetchGames()
}