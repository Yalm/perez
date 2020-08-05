const purgecss = require("@fullhuman/postcss-purgecss");

module.exports = {
  plugins: [
    process.env.NODE_ENV === "production"
      ? purgecss({
          content: [
            "./src/**/*.html",
            "./src/**/*.vue",
            "./src/**/*.js",
            "./src/**/*.scss"
          ]
        })
      : ""
  ]
};
