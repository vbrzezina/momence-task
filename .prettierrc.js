module.exports = {
  singleQuote: true,
  printWidth: 100,
  importOrder: [
    `^react(.*)$`,
    `^gatsby(.*)$`,
    `^netlify(.*)$`,
    `^(?![/.@])(.*)$`,
    "^@mui/icons-material.*$",
    "^@mui/lab.*$",
    "^@mui/material.*$",
    "^@mui.*$",
    "^@emotion.*$",
    "^@fontsource.*$",
    "^@.*$",
    "^[./](?!.*public)",
    "^[./](.*public)",
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderCaseInsensitive: true,
  importOrderParserPlugins: ["typescript", "jsx", "classProperties", "decorators-legacy"],
};
