export const isDimensionToken = (token) => {
  return ['borderRadius', 'fontSizes', 'lineHeights', 'spacing'].includes(token.$type);
};
