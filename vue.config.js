const manifestJSON = require("./public/manifest.json");

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/scss/_variables.scss";`
      }
    }
  },
  pwa: {
    name: manifestJSON.name,
    themeColor: manifestJSON.theme_color,
    msTileColor: "#000000",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: manifestJSON.theme_color
  }
};
