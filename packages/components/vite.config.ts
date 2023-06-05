import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
import DefineOptions from "unplugin-vue-define-options/vite";

export default defineConfig({
  build: {
    //压缩
    // minify: false,
    rollupOptions: {
      //忽略打包vue文件
      external: ["vue"],
      input: ["index.ts"],
      output: [
        {
          format: "es",
          entryFileNames: "[name].mjs",
          // 让打包目录和文件目录对应
          preserveModules: true,
          exports: "named",
          // 配置打包根目录
          dir: "../shine/es",
        },
        {
          format: "cjs",
          entryFileNames: "[name].js",
          // 让打包目录和文件目录对应
          preserveModules: true,
          exports: "named",
          // 配置打包根目录
          dir: "../shine/lib",
        },
      ],
    },
    lib: {
      entry: "./index.ts"
    },
  },
  plugins: [
    vue(),
    dts({
      entryRoot: "./src",
      outputDir: ["../shine/es/src", "../shine/lib/src"],
      tsConfigFilePath: "../../tsconfig.json",
    }),
    DefineOptions(),
  ],
});
