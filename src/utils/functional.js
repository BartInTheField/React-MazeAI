import complement from 'ramda/src/complement';

export const unexisty = value => value === null || typeof value === 'undefined';
export const existy = complement(unexisty);
