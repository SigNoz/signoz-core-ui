import { defineConfig } from "vite";
import { resolve, basename } from "path";
import dts from "vite-plugin-dts";
import { libInjectCss } from "vite-plugin-lib-inject-css";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [libInjectCss(), dts({ include: ["src"] })],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      formats: ["es"],
    },
  },
  css: {
    modules: {
      scopeBehaviour: "local",
      generateScopedName: (name, filename, _css) => {
        const _basename = basename(filename).replace(/\.module\.scss?.*/, "");
        return `${_basename}--${name}`;
      },
    },
  },
});
