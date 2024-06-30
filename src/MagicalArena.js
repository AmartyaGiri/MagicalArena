import Player from "./Player.js";
import readline from "readline";

class MagicalArena {
  constructor(player1, player2) {
    this.playerA = player1;
    this.playerB = player2;
    this.currentTurn = player1.health < player2.health ? player1 : player2;
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  }

  switchTurn() {
    this.currentTurn =
      this.currentTurn === this.playerA ? this.playerB : this.playerA;
  }

  async playTurn() {
    const attacker = this.currentTurn;
    const defender = attacker === this.playerA ? this.playerB : this.playerA;

    const attackDamage = attacker.attackPower();
    const defenseValue = defender.defencePower();
    const damage = Math.max(0, attackDamage - defenseValue);
    defender.reduceHealth(damage);

    console.log(
      `${attacker.getName()} attacks ${defender.getName()} with damage ${damage}(${attacker.getName()}'s attack power ${attackDamage} - ${defender.getName()}'s defence strenght ${defenseValue}). ${defender.getName()}'s health: ${defender.getHealth()}`
    );

    if (defender.getHealth() <= 0) {
      console.log(`${attacker.getName()} wins the game!`);
      this.rl.close();
      return;
    }

    this.switchTurn();
    this.askForRoll();
  }

  askForRoll() {
    this.rl.question(
      `${this.currentTurn.getName()}, press Enter to roll the dice: `,
      () => {
        this.playTurn();
      }
    );
  }

  startCombat() {
    console.log("Combat begins!");
    this.askForRoll();
  }
}

export default MagicalArena;
