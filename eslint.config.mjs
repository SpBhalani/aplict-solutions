import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals.js";
import nextTs from "eslint-config-next/typescript.js";

const eslintConfig = defineConfig([
  ...(typeof nextVitals === 'object' && nextVitals !== null && !Array.isArray(nextVitals) ? [nextVitals] : nextVitals),
  ...(typeof nextTs === 'object' && nextTs !== null && !Array.isArray(nextTs) ? [nextTs] : nextTs),
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
