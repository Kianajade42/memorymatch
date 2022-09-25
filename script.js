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
    }
}

function ready(){
    let cards = Array.from(document.getElementsByClassName('card'));

    cards.forEach(card => {
        card.addEventListener('click',() => {
            //game.flipCard(card);
        })
    })
}

if(document.readyState === 'loading'){
    document.addEventListener('DOMcontentLoaded', ready())
} else {
        ready();   
}