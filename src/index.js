
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
             if
             (this.timeRemaining === 0)
             this.gameOver();
         }, 1000);
      
     }

            
        gameOver(){
            clearInterval(this.countDown)
            document.getElementById('game-over-text').classList.add('visible')
    }

      
          win() {
            localStorage.setItem("score", this.totalClicks)
            localStorage.setItem("time", this.totalTime)
            document.getElementById('win-text').classList.add('visible')
            document.getElementById("flip-form").innerHTML = localStorage.getItem("score")     
            document.getElementById("time-form").innerHTML = localStorage.getItem("time")       }

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
         return true;
        //  return !this.busy && !this.matchedCards.includes(card) && card !== this.cardToCheck
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

    let loginForm = (document.getElementById("login-form"))
    let player = (document.getElementById("login-field"))

    let commentForm = (document.getElementById("comment-form"))
    let review = (document.getElementById("comment-feild"))
    let reviewer = (document.getElementById("user-feild"))

    let again = Array.from(document.getElementsByClassName('overlay-text-small'));
    cards.forEach(card => {
        card.addEventListener('click',() => {
            game.flipCard(card);
        });
    });

     loginForm.addEventListener('submit', e=> {
      e.preventDefault()
      let user = player.value
      let body = {username: user}
         createUser(body)
          console.log(body)
       overlays.forEach(overlay =>
       overlay.classList.remove('visible'));
       game.startGame()
        }
        )
      commentForm.addEventListener('submit', e=> {
          e.preventDefault()
      let r = reviewer.value
      let rr = {username: r}
      let rrr = review.value
      let rrrr = {comment: rrr}
         createUser(rr, rrrr )
          console.log(body)
       overlays.forEach(overlay =>
       overlay.classList.remove('visible'));
       game.startGame()
     
        }
        )

       again.forEach(play => {
        play.addEventListener('click',() => {
            play.classList.remove('visible')
            game.startGame();
        });
    });
}


          if(document.readyState === 'loading'){
     document.addEventListener('DOMcontentLoaded', ready(), callUsers())
} else {
        ready()
}