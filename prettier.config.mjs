/** @type {import("prettier").Config }*/
const config = {
   semi: true,
   singleQuote: false,
   trailingComma: "es5",
   printWidth: 100,
   useTabs: false,
   tabWidth: 3,
   bracketSpacing: true,
   bracketSameLine: false,
   arrowParens: "always",
   endOfLine: "lf",
   plugins: ["prettier-plugin-tailwindcss", "prettier-plugin-astro"],
   tailwindConfig: "./tailwind.config.mjs",
   overrides: [
      {
         files: "*.astro",
         options: {
            parser: "astro",
         },
      },
   ],
};

export default config;
