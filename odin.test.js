const { capitalize } = require('./capitalize');
const { reverse } = require('./reverse');
const { Calc } = require('./calc');
const { cipher, deCipher } = require('./caesar');
const { analyzeArray } = require('./analyzeArray');

test('Capitalize', () => {
  expect(capitalize('test message'))
    .toBe('Test message')
});

test('Reverse string', () => {
  expect(reverse('abc def'))
    .toBe('fed cba')
});

describe('Calculator', () => {
  it('adds', () => {
    expect(Calc.add(506,907))
      .toBe(506+907);
  });

  it('substracts', () => {
    expect(Calc.minus(506,907))
      .toBe(506-907);
  });

  it('divides', () => {
    expect(Calc.divide(506,907))
      .toBe(506/907);
  });

  it('multiplies', () => {
    expect(Calc.multiply(506,907))
      .toBe(506*907);
  });
});

describe('Caesar cipher', () => {
  it('ciphers simple', () => {
    expect(cipher('A, b, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z.', 5))
      .toBe('F, g, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z, A, B, C, D, E.');
  });

  it('deciphers simple', () => {
    expect(deCipher('F, g, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z, a, b, c, d, E.', 5))
      .toBe('A, b, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, v, w, x, y, Z.');
  });
});

describe('Array analyzer', () => {
  it('get array object', () => {
    const testArray = [2,3,4,7,9,10];
    expect(analyzeArray(testArray))
      .toEqual({
        average: testArray.reduce((acc,curr) => acc + curr, 0) / testArray.length,
        min: Math.min(...testArray),
        max: Math.max(...testArray),
        length: testArray.length
      });
  });
});

