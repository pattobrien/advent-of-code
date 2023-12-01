/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { readFileSync, writeFileSync } from 'fs';

const input = readFileSync('src/input.txt', 'utf8');
const lines = input.split('\n');

export function parserPart1(line: string): number {
  const singleDigitRegex = /\d/g;
  const matches = line.match(singleDigitRegex)!;

  const firstDigit = matches[0];
  const lastDigit = matches[matches.length - 1];

  return parseInt(firstDigit + lastDigit);
}

export const codesPart1 = lines.map((line) => parserPart1(line));

const sumPart1 = codesPart1.reduce((code, current) => code + current);

console.log(`Part 1 answer: ${sumPart1}`);

writeFileSync('src/output.txt', `${sumPart1}`);

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

export function parserPart2(line: string): number {
  const regexArray = ['\\d', ...Object.keys(regexpDigitMap)];
  const concatenatedRegex = new RegExp(`(?=(${regexArray.join('|')}))`, 'g');

  const matches = Array.from(line.matchAll(concatenatedRegex), (m) => m[1]);
  const digits = matches.map((match) => matchToDigit(match));

  const digitFirst = digits[0];
  const digitLast = digits[digits.length - 1];

  return parseInt(digitFirst.toString() + digitLast.toString());
}

export const codesPart2 = lines.map((line) => parserPart2(line));

const sumPart2 = codesPart2.reduce((c, v) => c + v);

console.log(`Part 2 answer is: ${sumPart2}`);

writeFileSync('src/output2.txt', `${sumPart2}`);
