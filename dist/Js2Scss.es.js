function e(s) {
  return {
    name: "lmg-js2scss",
    buildStart() {
      const n = (void 0)(process.cwd(), "theme.config.js");
      (void 0)(n) || console.log(`Warning: File not found: ${n}`);
    }
  };
}
export {
  e as default
};
