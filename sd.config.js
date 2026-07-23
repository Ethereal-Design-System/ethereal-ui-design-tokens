import StyleDictionary from "style-dictionary";

export default {
  source: ["./src/tokens.json"],
  platforms: {
    json: {
      files: [
        {
          destination: "./dist/json/index.json",
          format: "json/nested",
        },
      ],
    },
  },
};

