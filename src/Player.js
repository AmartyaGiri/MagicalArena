class Player {
  constructor(name, health, strength, attack) {
    this.name = name;
    this.health = health;
    this.strength = strength;
    this.attack = attack;
  }

  getHealth() {
    return this.health;
  }

  getName() {
    return this.name;
  }

  reduceHealth(damage) {
    this.health -= damage;
    if (this.health < 0) {
      this.health = 0;
    }
  }

  attackPower() {
    return rollDice() * this.attack;
  }

  defencePower() {
    return rollDice() * this.strength;
  }
}

function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

export default Player;
