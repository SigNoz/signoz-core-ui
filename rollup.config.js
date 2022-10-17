const peerDepsExternal = require("rollup-plugin-peer-deps-external");
const commonjs = require("@rollup/plugin-commonjs");
const typescript = require("rollup-plugin-typescript2");
const postcss = require("rollup-plugin-postcss");
const json = require("@rollup/plugin-json");

const packageJson = require("./package.json");

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
    typescript({}),
    postcss({
      extensions: [".css"],
    }),
    json(),
  ],
};
