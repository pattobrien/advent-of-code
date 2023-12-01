import { readFileSync } from 'fs';
import { codes, codes2, part2Parse } from '../src';

test('First 5 codes', () => {
  expect(codes[0]).toEqual(35);
  expect(codes[1]).toEqual(92);
  expect(codes[2]).toEqual(96);
  expect(codes[3]).toEqual(16);
  expect(codes[4]).toEqual(95);
});

test('Part 2 - First 5 codes', () => {
  expect(codes2[0]).toEqual(55);
  expect(codes2[1]).toEqual(67);
  expect(codes2[2]).toEqual(96);
  expect(codes2[3]).toEqual(16);
  expect(codes2[4]).toEqual(45);

  expect(codes2[11]).toEqual(65);

  expect(codes2[170]).toEqual(19);

  // const goodRegex = /(?=(\d|one|two|three|four|five|six|seven|eight|nine|zero))/g;
  // const badRegex = /(\d|one|two|three|four|five|six|seven|eight|nine|zero)/g;

  // const line = 7oneighttcm
  // line.match(goodRegex) => 718
  // line.match(badRegex) => 71

  expect(codes2[284]).toEqual(78);

  expect(codes2[998]).toEqual(35);
  expect(codes2[999]).toEqual(66);
});

test('Part 2 - Example', () => {
  const input = readFileSync('src/example2.txt', 'utf8');
  const lines = input.split('\n');

  const codes2 = lines.map((line) => part2Parse(line));

  const sumOfCodes2 = codes2.reduce((c, v) => c + v);
  expect(sumOfCodes2).toEqual(281);
});
