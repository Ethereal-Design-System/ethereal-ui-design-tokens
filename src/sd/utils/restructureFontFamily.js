export const restructureFontFamily = (dictionary) => {
  if (dictionary.fontFamily?.platforms?.web) {
    dictionary.fontFamily = dictionary.fontFamily.platforms.web;
  }
};
