import { isDimensionToken } from '../filters/isDimensionToken.js';

export const cssPxValueTransform = {
  type: 'value',
  filter: isDimensionToken,
  transform: (token) => {
    const val = token.$value !== undefined ? token.$value : token.value;
    if (val === 0) return '0px';
    return `${val}px`;
  }
};
