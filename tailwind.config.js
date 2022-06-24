module.exports = {
  theme: {
    colors: {
      green: "#02a95c",
      yellow: "#fdb72f"
    },
    extend: {
      opacity: ["disabled"]
    }
  },
  variants: {
    opacity: ({ after }) => after(["disabled"])
  },
  plugins: []
};
