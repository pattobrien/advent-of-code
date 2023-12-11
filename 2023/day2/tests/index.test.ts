import { readFileSync } from "fs";
import {
  calculatePower,
  getMinimumCubes,
  getSumOfPossibleGameIds,
  getSumOfPowers,
  isImpossibleGame,
  parseRecord,
} from "../src/index";

test("Example impossible games", () => {
  const input = readFileSync("tests/example", "utf-8");
  const record = parseRecord(input);
  const maxs = {
    maxRed: 12,
    maxGreen: 13,
    maxBlue: 14,
  };

  expect(isImpossibleGame(record.games[0], maxs)).toEqual(false);
  expect(isImpossibleGame(record.games[1], maxs)).toEqual(false);
  expect(isImpossibleGame(record.games[2], maxs)).toEqual(true);
  expect(isImpossibleGame(record.games[3], maxs)).toEqual(true);
  expect(isImpossibleGame(record.games[4], maxs)).toEqual(false);

  expect(getSumOfPossibleGameIds(record)).toEqual(8);
});

test("Real impossible games", () => {
  const input = readFileSync("input", "utf-8");
  const record = parseRecord(input);
  const maxs = {
    maxRed: 12,
    maxGreen: 13,
    maxBlue: 14,
  };

  expect(isImpossibleGame(record.games[0], maxs)).toEqual(true);
});

test("Part 2 - Example", () => {
  const input = readFileSync("tests/example", "utf-8");
  const record = parseRecord(input);

  expect(getMinimumCubes(record.games[0])).toEqual({
    blue: 6,
    green: 2,
    red: 4,
  });
  expect(getMinimumCubes(record.games[1])).toEqual({
    blue: 4,
    green: 3,
    red: 1,
  });
  expect(getMinimumCubes(record.games[2])).toEqual({
    blue: 6,
    green: 13,
    red: 20,
  });
  expect(getMinimumCubes(record.games[3])).toEqual({
    blue: 15,
    green: 3,
    red: 14,
  });
  expect(getMinimumCubes(record.games[4])).toEqual({
    blue: 2,
    green: 3,
    red: 6,
  });

  expect(calculatePower(record.games[0])).toEqual(48);
  expect(calculatePower(record.games[1])).toEqual(12);
  expect(calculatePower(record.games[2])).toEqual(1560);
  expect(calculatePower(record.games[3])).toEqual(630);
  expect(calculatePower(record.games[4])).toEqual(36);

  expect(getSumOfPowers(record)).toEqual(2286);
});
