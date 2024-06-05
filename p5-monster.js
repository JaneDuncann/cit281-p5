module.exports = class Monster {
  constructor({ monsterName = "Unknown", minimumLife = 0, currentLife = 100 }) {
    this.monsterName = monsterName;
    this.minimumLife = minimumLife;
    this.currentLife = currentLife;
    this.isAlive = (currentLife >= minimumLife);
  }
  updateLife(lifeChangeAmount) {
    this.currentLife = this.currentLife + lifeChangeAmount < 0 ? 0 : this.currentLife
    this.isAlive = this.currentLife >= this.minimumLife ? true : false;
  }

  getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  } //found in p2-random.js

  randomLifeDrain(minimumLifeDrain, maximumLifeDrain){
    if (minimumLifeDrain >= maximumLifeDrain) {
      console.log("Error: minimumLifeDrain must be less than maximumLifeDrain")
    }
    let lifeDrainAmount = this.getRandomInteger(minimumLifeDrain, maximumLifeDrain + 1)
    this.updateLife(-lifeDrainAmount)
    console.log(`Random life drain of ${lifeDrainAmount} applied.Current life is ${this.currentLife}`)
    return lifeDrainAmount
  }
}
