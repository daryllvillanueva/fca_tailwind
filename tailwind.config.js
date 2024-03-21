module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        insightBanner: "url(../dist/img/banner-img.png)",

      },
      colors: {
        dark: "#2b2b2b",
        light: "#ffffff",
        primary: "#daa625",
        secondary: "#28941e",
        subBlue: "#3b5897",
        contentBg: "#f2f2f2"
      }
    },
  },
  plugins: [],
}


