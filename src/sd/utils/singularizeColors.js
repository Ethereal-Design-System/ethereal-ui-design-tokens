export const singularizeColors = (path) => {
  const newPath = [...path];
  if (newPath[0] === 'colors') {
    newPath[0] = 'color';
  }
  return newPath;
};
