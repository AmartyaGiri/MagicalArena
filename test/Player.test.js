import Player from "../src/Player.js";

describe("Player Class", () => {
  let player;

  beforeEach(() => {
    player = new Player("Test Player", 100, 10, 5);
  });

  test("should initialize with correct values", () => {
    expect(player.getName()).toBe("Test Player");
    expect(player.getHealth()).toBe(100);
    expect(player.strength).toBe(10);
    expect(player.attack).toBe(5);
  });

  test("should reduce health correctly", () => {
    player.reduceHealth(20);
    expect(player.getHealth()).toBe(80);
    player.reduceHealth(100);
    expect(player.getHealth()).toBe(0);
  });

  test("should return a number for attack power", () => {
    const attackPower = player.attackPower();
    expect(typeof attackPower).toBe("number");
    expect(attackPower).toBeGreaterThanOrEqual(5); // Minimum value: 1 * 5
    expect(attackPower).toBeLessThanOrEqual(30); // Maximum value: 6 * 5
  });

  test("should return a number for defense power", () => {
    const defencePower = player.defencePower();
    expect(typeof defencePower).toBe("number");
    expect(defencePower).toBeGreaterThanOrEqual(10); // Minimum value: 1 * 10
    expect(defencePower).toBeLessThanOrEqual(60); // Maximum value: 6 * 10
  });

  test("health should not go below zero", () => {
    player.reduceHealth(150);
    expect(player.getHealth()).toBe(0);
  });
});
