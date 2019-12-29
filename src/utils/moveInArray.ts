import { Figure } from 'context/figures/interfaces';

export default (array: any[], oldIndex: number, newIndex: number): any[] => {
  const result: (string | [string, Figure] | undefined)[] = array.slice();
  if (newIndex >= result.length) {
    let index: number = newIndex - result.length + 1;
    while (index--) {
      result.push(undefined);
    }
  }
  result.splice(newIndex, 0, result.splice(oldIndex, 1)[0]);
  return result;
};
