import { defineConfig } from "@zhangyu1818/eslint-config";

export default defineConfig({
  presets: {
    tailwindcss: true,
    typescript: true,
  },
  reactOptions: {
    a11y: true,
  },
  tailwindcssOptions: {
    entryPoint: "src/app/[lang]/globals.css",
  },
});
