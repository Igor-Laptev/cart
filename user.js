class User {
  constructor(name, score = 0) {
    this.name = name;
    this.score = score;
  }

  calculatorPLus() {
    this.score += 100;
  }

  calculatorMinus() {
    this.score -= 100;
  }
}

module.exports = User;
