import { codes } from '../src';

test('First 5 codes', () => {
  expect(codes[0]).toEqual(35);
  expect(codes[1]).toEqual(92);
  expect(codes[2]).toEqual(96);
  expect(codes[3]).toEqual(16);
  expect(codes[4]).toEqual(95);
});
