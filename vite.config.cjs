import { defineConfig } from "vite";
const { resolve } = require('path')
const env = process.env;
env.mode = env.mode || "production";
export default defineConfig({
  root: "./",
  //:home: En esta linea se cambia la frase /eventos-app/ por el nombre de su repositorio
  base: env.mode === "production" ? "/prototipo-app/" : "/",
  build: {
    outDir: "docs",
    assetsDir: "assets",
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        detalles: resolve(__dirname, 'detalles.html'),
        informacion: resolve(__dirname, 'informacion.html'),
        location: resolve(__dirname, 'location.html'),
        timeline: resolve(__dirname, 'timeline.html'),
      }
    }
  },
  plugins: []
});