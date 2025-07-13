import { defineConfig } from "@zhangyu1818/eslint-config";

export default defineConfig({
  presets: {
    prettier: true,
    tailwindcss: true,
    typescript: true,
  },
  reactOptions: {
    a11y: true,
  },
});
