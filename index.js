
function ready() {
    let cards = Array.from(document.getElementsByClassName('card'));
    let game = new Match(150, cards);
    cards.forEach(card => {
        card.addEventListener('click', () => {
            game.flipcard(card)
        });
    });
}
if (document.readyState === 'loading') {
    document.addEventListener('DOMcontentLoaded', ready());
} else {
    ready();
}

class Match {
    constructor(time, cards) {
        this.time = time;
        this.cards = cards;
        this.timeRemaining = time;
        this.timer = document.getElementById('timer');
    }
    startCountDown() {
        return setInterval(() => {
            this.time--;
            this.time.innerText = this.timeRemaining;
            if (this.timeRemaining === 0)
                this.stop();
        }, 150);
    }
    startGame() {
        this.cardValid = null;
        this.totalClicks = 0;
        this.time = this.time;
        this.matches = [];
        this.busy = true;
        this.shuffleCards();
    }
    validFlipcard(card) {
        return true;
        //return !this.busy && !this.matchedCards.includes(card) && card !== this.cardValid;
    }
    flipCard(card) {
        if (this.canFlipCard(card)) {
            card.classList.add('visible')
        }

    }
    //  shuffleCards() {
    // for (let i = this.cardsArray.length - 1; i > 0; i--) (
    //   let shuffle = Math.floor(Math.random() * (i + 1));
    //     this.cardsArray[shuffle].style.order = i;
    //  this.cardsArray[i].style.order = shuffle;
    // )

}
