import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintPluginAstro from "eslint-plugin-astro";

export default [
   { files: ["**/*.{ts,jsx,tsx,astro}"] },
   pluginJs.configs.recommended,
   ...tseslint.configs.recommended,
   ...eslintPluginAstro.configs.recommended,
];
