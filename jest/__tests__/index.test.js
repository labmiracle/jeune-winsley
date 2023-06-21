const fizzBuzz = require('../js/ejercicio1_1.js');

describe('fizzBuzz', () => {
    test('should return 0 if num is 0', () => {
        expect(fizzBuzz(0)).toBe(0);
      });
  test('should return FizzBuzz if num is divisible by 3 and 5', () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz');
  });

  test('should return Buzz if num is divisible by 5', () => {
    expect(fizzBuzz(5)).toBe('Buzz');
  });

  test('should return Fizz if num is divisible by 3', () => {
    expect(fizzBuzz(3)).toBe('Fizz');
  });

  test('should return num if num is not divisible by 3 or 5', () => {
    expect(fizzBuzz(2)).toBe(2);
  }); 

  test('should return num if num is a string', () => {
    expect(fizzBuzz('hola')).toBe('hola');
  });
});
