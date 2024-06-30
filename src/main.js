import Player from "./Player.js";
import MagicalArena from "./MagicalArena.js";
import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const askQuestion = (question) => {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
};

const createPlayer = async (playerNum) => {
  const name =
    (await askQuestion(
      `Enter name for Player ${playerNum} or Default Name -> Player ${playerNum}: `
    )) || `Player ${playerNum}`;
  const health =
    parseInt(
      await askQuestion(
        `Enter health for Player ${playerNum} or Default Health -> 100: `
      ),
      10
    ) || 100;
  const strength =
    parseInt(
      await askQuestion(
        `Enter strength for Player ${playerNum} or Default Strength -> 5: `
      ),
      10
    ) || 5;
  const attack =
    parseInt(
      await askQuestion(
        `Enter attack for Player ${playerNum} or Default Attack -> 10: `
      ),
      10
    ) || 10;

  return new Player(name, health, strength, attack);
};

const startGame = async () => {
  console.log("Welcome to the Magical Arena!");

  const playerA = await createPlayer("A");
  const playerB = await createPlayer("B");

  const arena = new MagicalArena(playerA, playerB);
  arena.startCombat();
};

startGame();
