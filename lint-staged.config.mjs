import { relative, resolve } from "path";
import { fileURLToPath } from "url";

// Get the current directory name
const __dirname = resolve(fileURLToPath(import.meta.url), "..");

// Function to build the ESLint command
const buildEslintCommand = (filenames) =>
   `eslint --fix ${filenames.map((f) => relative(__dirname, f)).join(" ")}`;

// Function to build the Prettier command
const buildPrettierCommand = (filenames) =>
   `prettier --write ${filenames.map((f) => relative(__dirname, f)).join(" ")}`;

// Lint-staged configuration
const config = {
   "*.{js,mjs,jsx,ts,tsx,astro,json}": [buildEslintCommand, buildPrettierCommand],
   "*.{css,scss}": [buildPrettierCommand],
};

export default config;
