module.exports = {
  mode: "jit",
  corePlugins: {
    preflight: false,
  },
  purge: {
    enabled: true,
    content: ["./src/**/*.{html,ts}"],
  },
  theme: {
    extend: {},
  },
  plugins: [],
};
