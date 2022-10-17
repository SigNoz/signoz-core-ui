const peerDepsExternal = require("rollup-plugin-peer-deps-external");
const commonjs = require("@rollup/plugin-commonjs");
const typescript = require("rollup-plugin-typescript2");
const postcss = require("rollup-plugin-postcss");
const json = require("@rollup/plugin-json");

const packageJson = require("./package.json");
const tsconfigDefaults = require("./tsconfig.json");

module.exports = {
  input: "src/index.ts",
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    commonjs(),
    typescript({
      tsconfigDefaults,
      tsconfig: "tsconfig.json",
    }),
    postcss({
      extensions: [".css"],
    }),
    json(),
  ],
};
