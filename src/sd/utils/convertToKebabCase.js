export const convertToKebabCase = (path) => {
  return path.map(part => 
    part.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
  );
};
