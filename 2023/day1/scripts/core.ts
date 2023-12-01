import * as dotenv from 'dotenv';
const arg = process.argv.slice(3).find((arg) => arg.startsWith('--day='));
const arg2 = process.argv.slice(3).find((arg) => arg.startsWith('--level='));
// console.log
const _day = arg !== undefined ? parseInt(arg.split('=')[1], 10) : null;
const _level = arg2 !== undefined ? parseInt(arg2.split('=')[1], 10) : null;

if (_day == null) {
  throw new Error('No day argument passed');
}
if (_level == null) {
  throw new Error('No level arg passed');
}

export const day = _day;
export const level = _level;

dotenv.config();

export const adventOfCodeUrl = (day: number): string => {
  return `https://adventofcode.com/2023/day/${day}`;
};

const _sessionCookie = process.env.AOC_SESSION;

if (_sessionCookie === undefined) {
  throw new Error(`Session cookie isn't set`);
}

export const sessionCookie = _sessionCookie;
