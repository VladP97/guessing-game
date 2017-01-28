class GuessingGame {
    constructor() {
        this.min = 0;
        this.max = 0;
        this.prevMethod = " ";
        this.guessVal = 0;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
      if (this.prevMethod == " ")
      {
        this.guessVal = Math.ceil((this.min+this.max)/2);
      }
       if (this.prevMethod == "lower"){
         this.max = this.guessVal;
         this.guessVal = Math.ceil((this.min+this.max)/2);
       }
       if (this.prevMethod == "greater"){
         this.min = Math.ceil((this.min+this.max)/2);
         this.guessVal = Math.ceil((this.min+this.max)/2);
       }
       return this.guessVal;
    }

    lower() {
       this.prevMethod = "lower";
    }

    greater() {
       this.prevMethod = "greater";
    }
}

module.exports = GuessingGame;
