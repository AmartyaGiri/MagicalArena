import Player from "../src/Player.js";
import MagicalArena from "../src/MagicalArena.js";

jest.mock("readline", () => ({
  createInterface: jest.fn(() => ({
    question: jest.fn(),
    close: jest.fn(),
  })),
}));

describe("MagicalArena", () => {
  const playerA = new Player("Player A", 80, 10, 5);
  const playerB = new Player("Player B", 100, 8, 6);

  let arena;

  beforeEach(() => {
    arena = new MagicalArena(playerA, playerB);
  });

  test("Initialization", () => {
    expect(arena.playerA).toBe(playerA);
    expect(arena.playerB).toBe(playerB);
    expect(arena.currentTurn).toBe(playerA);
  });

  test("Switch Turn", () => {
    arena.switchTurn();
    expect(arena.currentTurn).toBe(playerB);
    arena.switchTurn();
    expect(arena.currentTurn).toBe(playerA);
  });

  test("Play Turn", () => {
    const spy = jest.spyOn(arena, "askForRoll");
    playerA.attackPower = jest.fn(() => 10);
    playerB.defencePower = jest.fn(() => 5);
    playerB.reduceHealth = jest.fn();
    arena.playTurn();
    expect(playerB.reduceHealth).toHaveBeenCalledWith(5);
    expect(spy).toHaveBeenCalled();
  });

  test("Ask for Roll", () => {
    const spy = jest.spyOn(arena.rl, "question");
    arena.askForRoll();
    expect(spy).toHaveBeenCalled();
  });

  test("Start Combat", () => {
    const spy = jest.spyOn(arena, "askForRoll");
    arena.startCombat();
    expect(spy).toHaveBeenCalled();
  });
});
