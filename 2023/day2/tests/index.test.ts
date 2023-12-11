import { readFileSync } from "fs";
import {
  getSumOfPossibleGameIds,
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
  expect(isImpossibleGame(record.games[1], maxs)).toEqual(true);
  expect(isImpossibleGame(record.games[2], maxs)).toEqual(true);
  expect(isImpossibleGame(record.games[3], maxs)).toEqual(true);
  expect(isImpossibleGame(record.games[4], maxs)).toEqual(false);

  // expect(getSumOfPossibleGameIds(record)).toEqual(8);
});
