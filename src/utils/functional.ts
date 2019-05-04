import complement from 'ramda/src/complement';

export const unexisty = (value: any): boolean =>
  value === null || typeof value === 'undefined';
export const existy = complement(unexisty);

export const arrayIsEmpty = (array: any[]): boolean => array.length === 0;
export const arrayIsNotEmpty = complement(arrayIsEmpty);
