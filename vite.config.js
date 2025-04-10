import { defineConfig } from 'vite';

export default defineConfig({
  root: './', // Adjust if your index.html is located in a different directory
  build: {
    lib: {
        entry: 'vite-plugin/Js2Scss.js', // Entry point for your library (the SCSS plugin)
        name: 'Js2Scss',
        fileName: (format) => `Js2Scss.js`, // Output file names
    },
    outDir: 'dist', // Specify the output directory for your build
  },
});