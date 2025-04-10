import { defineConfig } from 'vite';

export default defineConfig({
  root: './', // Adjust if your index.html is located in a different directory
  build: {
    lib: {
        entry: 'vite-plugin/LMGFramework.js', // Entry point for your library (the SCSS plugin)
        name: 'LMGFramework',
        fileName: (format) => `LMGFramework.js`, // Output file names
        formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: ['path', 'fs', 'resolve', 'existsSync', 'writeFileSync'], // don't bundle Node built-ins
    },
    outDir: 'dist', // Specify the output directory for your build
  },
});