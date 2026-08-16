import StyleDictionary from "style-dictionary";
import { customPreprocessor } from "./src/sd/preprocessors/customPreprocessor.js";
import { cssNameTransform } from "./src/sd/transforms/cssNameTransform.js";
import { tailwindNameTransform } from "./src/sd/transforms/tailwindNameTransform.js";
import { cssPxValueTransform } from "./src/sd/transforms/cssPxValueTransform.js";

const SOURCE = ["./src/tokens.json"]

const build = async () => {
  const cssSD = new StyleDictionary({
    source: SOURCE,
    preprocessors: ["custom/preprocessor"],
    hooks: {
      preprocessors: {
        "custom/preprocessor": customPreprocessor
      },
      transforms: {
        "name/css/custom": cssNameTransform,
        "name/css/tailwind": tailwindNameTransform,
        "value/css/px": cssPxValueTransform
      }
    },
    platforms: {
      css: {
        buildPath: "./dist/css/",
        transforms: ["attribute/cti", "name/css/custom", "value/css/px", "color/css"],
        files: [
          {
            destination: "variables.css",
            format: "css/variables",
            options: {
              selector: ":root"
            }
          }
        ]
      },
      tailwind: {
        buildPath: "./dist/css/",
        transforms: ["attribute/cti", "name/css/tailwind", "value/css/px", "color/css"],
        files: [
          {
            destination: "tailwind.css",
            format: "css/variables",
            options: {
              selector: "@theme"
            }
          }
        ]
      },
      json: {
        files: [
          {
            destination: "./dist/json/index.json",
            format: "json/nested",
          },
        ],
      },
    },
  })

  const universalSD = new StyleDictionary({
    source: SOURCE,
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
  })

  await cssSD.buildAllPlatforms()
  await universalSD.buildAllPlatforms()
}

build()
