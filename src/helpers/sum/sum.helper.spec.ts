import { sum } from './sum.helper';

describe('Helpers - Sum', () => {
  it.each([
    [1, 2, 3],
    [40, 2, 42],
    [0, 0, 0],
    [-1, 5, 4],
    [-1, -5, -6],
  ])('%s + %s = %s', (a: number, b: number, expected: number) => {
    expect(sum(a, b)).toBe(expected);
  });
});

console.log(
  'adzadzadza adzadzadza adzadzadza adzadzadza adzadzadza adzadzadza adzadzadza adzadzadza adzadzadza adzadzadza adzadzadza adzadzadza adzadzadza adzadzadza adzadzadza adzadzadza adzadzadza adzadzadza adzadzadza '
);
