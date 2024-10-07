import { relative } from "path";

const buildPrettierCommand = (filenames) =>
   `prettier --write ${filenames.map((f) => relative(process.cwd(), f)).join(" ")}`;

const config = {
   "*.{js,mjs,jsx,ts,tsx,astro}": [buildPrettierCommand],
   "*.{css,scss}": [buildPrettierCommand],
};

export default config;
