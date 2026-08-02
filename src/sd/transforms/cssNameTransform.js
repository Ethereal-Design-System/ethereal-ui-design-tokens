import { singularizeColors } from '../utils/singularizeColors.js';
import { convertToKebabCase } from '../utils/convertToKebabCase.js';

export const cssNameTransform = {
  type: 'name',
  transform: (token) => {
    let path = singularizeColors(token.path);
    path = convertToKebabCase(path);

    return path.join('-');
  }
};
