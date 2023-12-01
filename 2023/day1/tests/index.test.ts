import { readFileSync } from 'fs';
import { codesPart1, codesPart2, parserPart2 } from '../src';

test('First 5 codes', () => {
  expect(codesPart1[0]).toEqual(35);
  expect(codesPart1[1]).toEqual(92);
  expect(codesPart1[2]).toEqual(96);
  expect(codesPart1[3]).toEqual(16);
  expect(codesPart1[4]).toEqual(95);
});

test('Part 2 - First 5 codes', () => {
  expect(codesPart2[0]).toEqual(55);
  expect(codesPart2[1]).toEqual(67);
  expect(codesPart2[2]).toEqual(96);
  expect(codesPart2[3]).toEqual(16);
  expect(codesPart2[4]).toEqual(45);

  expect(codesPart2[11]).toEqual(65);

  expect(codesPart2[170]).toEqual(19);

  // const goodRegex = /(?=(\d|one|two|three|four|five|six|seven|eight|nine|zero))/g;
  // const badRegex = /(\d|one|two|three|four|five|six|seven|eight|nine|zero)/g;

  // const line = 7oneighttcm
  // line.match(goodRegex) => 718
  // line.match(badRegex) => 71

  expect(codesPart2[284]).toEqual(78);

  expect(codesPart2[998]).toEqual(35);
  expect(codesPart2[999]).toEqual(66);
});

test('Part 2 - Example', () => {
  const input = readFileSync('src/example2.txt', 'utf8');
  const lines = input.split('\n');

  const codes2 = lines.map((line) => parserPart2(line));

  const sumOfCodes2 = codes2.reduce((c, v) => c + v);
  expect(sumOfCodes2).toEqual(281);
});
