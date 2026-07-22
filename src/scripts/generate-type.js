import fs from "fs";
import path from "path";

const [, , input = "src/tokens.json", output = "dist/json/index.d.ts"] =
  process.argv;

function getTypedFileStructure(allTokens, indent) {
  const nextIndent = indent + "  ";

  const fields = Object.entries(allTokens)
    .map(([key, tokenGroup]) => {
      const typeStr = getValueType(tokenGroup, key, nextIndent);

      return ` ${JSON.stringify(key)}: ${typeStr};`;
    })
    .join("\n");

  return `{\n${fields}\n${indent}}`;
}

function getValueType(value, key, indent = "") {
  const hasTokenStudioFormat = value?.$value || value?.$type;

  if (hasTokenStudioFormat) {
    return typeof value?.$value;
  }

  if (Array.isArray(value)) {
    return `${getValueType(value[0] ?? "", key, indent)}[]`;
  }

  if (!hasTokenStudioFormat && typeof value === "object" && value !== null) {
    return getTypedFileStructure(value, indent);
  }
}

const tokens = JSON.parse(fs.readFileSync(input, "utf-8"));

const dts = `export interface IDesignTokens ${getValueType(tokens, null)}\n\ndeclare const designTokens: IDesignTokens;\nexport default designTokens;\n`;

const outDir = path.dirname(output);

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

fs.writeFileSync(output, dts);
console.log(`✔ ${output} gerado a partir de ${input}`);

