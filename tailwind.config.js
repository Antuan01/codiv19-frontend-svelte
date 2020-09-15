module.exports = {
  purge: ["./src/**/*.svelte", "./src/**/*.html"],
  theme: {
    extend: {
      width: {
        "9/10": "90%"
      },
      margin: {
        "5%": "5%"
      },
      minHeight: {
        "180": 180
      },
      maxWidth: {
        "400": "400px",
        "630": "630px"
      },
    },
  },
  variants: {},
  plugins: [],
}
