import { sortAscendingCompareFn } from './sortAscendingCompareFn';

describe('sortAscendingCompareFn.test.ts', () => {
  test('when given unordered array of numbers, should order it ascending', () => {
    const array = [2, 1, 3, 0, -5];

    array.sort(sortAscendingCompareFn);

    expect(array).toEqual([-5, 0, 1, 2, 3]);
  });
});
