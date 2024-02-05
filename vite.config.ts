import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://tulza.github.io/vite-react-ts-template/",
  plugins: [react(), tsconfigPaths()],
});
