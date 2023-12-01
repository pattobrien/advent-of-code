import { readFileSync, writeFileSync } from 'fs';

const input = readFileSync('src/input.txt', 'utf8');
const lines = input.split('\n');

export const codes: number[] = [];

for (const line of lines) {
  const re = /\d/g;
  const matches = line.match(re);

  if (matches == null) {
    throw new Error(`This should not happen!`);
  }

  const lastDigitIndex = matches.length - 1;
  const matchFirst = matches[0];
  const matchLast = matches[lastDigitIndex];

  const code = matchFirst + matchLast;
  const codeAsNumber = parseInt(code);

  codes.push(codeAsNumber);
}

let sumOfCodes = 0;

for (const code of codes) {
  sumOfCodes += code;
}

console.log(`Answer is: ${sumOfCodes}`);

writeFileSync('src/output.txt', `${sumOfCodes}`);
