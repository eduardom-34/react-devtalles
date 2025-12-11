import { describe, expect, test } from 'vitest';
import { add, divide, multiply, subtract } from './math.helper';

describe('add', () => {

  test('shoud add two positives number', () => {

    // ! 1. Arrange
    const a = 1;
    const b = 2;

    // ! 2. Act
    const result = add(a, b);

    // ! 3. Assert
    expect(result).toBe(3);
  });

  test('shoud add two positives number', () => {

    // ! 1. Arrange
    const a = 1;
    const b = 2;

    // ! 2. Act
    const result = add(a, b);

    // ! 3. Assert
    expect(result).toBe(3);
  });

});

describe('subtract', () => {

  test('shoud subtract two positives number', () => {

    // ! 1. Arrange
    const a = 6;
    const b = 2;

    // ! 2. Act
    const result = subtract(a, b);

    // ! 3. Assert
    expect(result).toBe(a - b);
  });

  test('shoud subtract two negative number', () => {

    // ! 1. Arrange
    const a = -6;
    const b = -2;

    // ! 2. Act
    const result = subtract(a, b);

    // ! 3. Assert
    expect(result).toBe(a - b);
  });

});


describe('multiply', () => {

  test('shoud multiply two positives number', () => {

    // ! 1. Arrange
    const a = 3;
    const b = 2;

    // ! 2. Act
    const result = multiply(a, b);

    // ! 3. Assert
    expect(result).toBe(a * b);
  });
  test('shoud multiply two numbers, one positive and one negative', () => {

    // ! 1. Arrange
    const a = 3;
    const b = -2;

    // ! 2. Act
    const result = multiply(a, b);

    // ! 3. Assert
    expect(result).toBe(a * b);
  });

  test('shoud divide two numbers, one positive and one negative', () => {

    // ! 1. Arrange
    const a = 3;
    const b = -2;

    // ! 2. Act
    const result = divide(a, b);

    // ! 3. Assert
    expect(result).toBe(a / b);
  });


});



