import { unifyBoxShadow } from '../utils/unifyBoxShadow.js';
import { restructureFontFamily } from '../utils/restructureFontFamily.js';

export const customPreprocessor = (dictionary) => {
  const newDict = structuredClone(dictionary);

  unifyBoxShadow(newDict);
  restructureFontFamily(newDict);

  return newDict;
};
