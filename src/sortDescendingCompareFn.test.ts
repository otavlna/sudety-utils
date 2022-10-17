import { sortDescendingCompareFn } from './sortDescendingCompareFn';

describe('sortAscendingCompareFn.test.ts', () => {
  test('when given unordered array of numbers, should order it descending', () => {
    const array = [2, 1, 3, 0, -5];

    array.sort(sortDescendingCompareFn);

    expect(array).toEqual([3, 2, 1, 0, -5]);
  });
});
