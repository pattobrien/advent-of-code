/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { readFileSync, writeFileSync } from 'fs';

const input = readFileSync('src/input.txt', 'utf8');
const lines = input.split('\n');

export function part1Parse(line: string): number {
  const singleDigitRegex = /\d/g;
  const matches = line.match(singleDigitRegex)!;

  const lastDigitIndex = matches.length - 1;
  const matchFirst = matches[0];
  const matchLast = matches[lastDigitIndex];

  return parseInt(matchFirst + matchLast);
}

export const codes = lines.map((line) => part1Parse(line));

const sumOfCodes = codes.reduce((code, current) => code + current);

console.log(`Part 1 answer is: ${sumOfCodes}`);

writeFileSync('src/output.txt', `${sumOfCodes}`);

const singleDigitRegex = /\d/;
// eslint-disable-next-line @typescript-eslint/consistent-indexed-object-style
const regexpDigitMap: { [key: string]: number } = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  zero: 0,
};

export function matchToDigit(match: string): number {
  const isSingleDigit = (value: string): boolean => /\d/.test(value);
  if (isSingleDigit(match)) {
    return parseInt(match);
  } else {
    return regexpDigitMap[match];
  }
}

export function part2Parse(line: string): number {
  const newregex = ['\\d', ...Object.keys(regexpDigitMap)];
  const joinedRegex = new RegExp(`(?=(${newregex.join('|')}))`, 'g');
  const matches = Array.from(line.matchAll(joinedRegex), (m) => m[1]);

  const matchesToDigits = matches.map((match) => matchToDigit(match));

  const lastDigitIndex = matchesToDigits.length - 1;
  const matchFirst = matchesToDigits[0];
  const matchLast = matchesToDigits[lastDigitIndex];

  const bothDigits = matchFirst.toString() + matchLast.toString();

  return parseInt(bothDigits);
}

export const codes2 = lines.map((line) => part2Parse(line));

const sumOfCodes2 = codes2.reduce((c, v) => c + v);

console.log(`Part 2 answer is: ${sumOfCodes2}`);

writeFileSync('src/output2.txt', `${sumOfCodes2}`);

// void uploadAnswer(1, 2, sumOfCodes2.toString());
