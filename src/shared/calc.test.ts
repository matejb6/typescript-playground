import { Calc } from './calc';

describe('Calc', () => {
  test('adds two numbers', () => {
    expect(Calc.add(1, 2)).toBe(3);
  });

  test('subtracts two numbers', () => {
    expect(Calc.subtract(5, 2)).toBe(3);
  });

  test('multiplies two numbers', () => {
    expect(Calc.multiply(5, 2)).toBe(10);
  });

  test('divides two numbers', () => {
    expect(Calc.multiply(6, 2)).toBe(3);
  });
});
