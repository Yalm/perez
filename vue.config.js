const manifestJSON = require("./public/manifest.json");

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? process.env.CI_PROJECT_NAME.trim() || '/' : '/',
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
