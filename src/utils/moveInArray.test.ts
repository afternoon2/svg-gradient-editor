import moveInArray from './moveInArray';

describe('moveInArray', () => {
  test('If it works', () => {
    const arr: string[] = ['a', 'b', 'c', 'd'];
    const moveFrom = 2;
    const moveTo = 3;
    expect(moveInArray(arr, moveFrom, moveTo)[3]).toBe('c');
  });
});
