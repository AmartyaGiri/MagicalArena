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
});
