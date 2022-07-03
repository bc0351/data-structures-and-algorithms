'use strict';
const { Stack, validateBrackets } = require('./validate-brackets');

describe('validateBrackets()', () => {
  it('should return true given input "[]{}()"', () => {
    let str = '[]{}()';

    expect(validateBrackets(str)).toEqual(true);
  });
  it('should return false given input "[[[{{(("', () => {
    let str = '[[[{{((';

    expect(validateBrackets(str)).toEqual(false);
  });
  it('should return true given input "[{()}]"', () => {
    let str = '[{()}]';

    expect(validateBrackets(str)).toEqual(true);
  });
  it('should return false given input "[{{543()}]"', () => {
    let str = '[{{543()}]';

    expect(validateBrackets(str)).toEqual(false);
  });
  it('should return an error when attempting to pop from an empty stack', () => {
    let stack = new Stack();

    expect(() => { stack.pop() }).toThrow('Nothing to pop!');
  });
  it('should return true when given a null argument', () => {
    expect(validateBrackets(null)).toEqual(true)
  });
});
