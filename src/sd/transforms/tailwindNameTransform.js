import { singularizeColors } from '../utils/singularizeColors.js';
import { convertToKebabCase } from '../utils/convertToKebabCase.js';

export const tailwindNameTransform = {
  type: 'name',
  transform: (token) => {
    let path = singularizeColors(token.path);
    path = convertToKebabCase(path);

    const tokensPrefixMap = {
      "font-family": "font",
      "font-size": "text",
      "font-weight": "font",
      "line-height": "leading",
      "border-radius": "radius",
      "box-shadow": "shadow"
    }

    const tokenPrefix = path[0];

    if (tokensPrefixMap[tokenPrefix]) {
      path[0] = tokensPrefixMap[tokenPrefix];
    }

    return path.join('-');
  }
};
