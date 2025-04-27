import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "@typescript-eslint/no-unused-vars": "warn", // Reduzir para aviso em vez de erro
      "@typescript-eslint/no-unused-expressions": "warn", // Reduzir para aviso em vez de erro
      "@typescript-eslint/no-require-imports": "warn", // Reduzir para aviso em vez de erro
    },
    overrides: [
      {
        // Desativar regras para arquivos gerados
        files: ["**/generated/**/*.js", "**/generated/**/*.ts"],
        rules: {
          "@typescript-eslint/no-unused-vars": "off",
          "@typescript-eslint/no-unused-expressions": "off",
          "@typescript-eslint/no-require-imports": "off"
        }
      }
    ]
  }
];

export default eslintConfig;