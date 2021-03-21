module.exports = {
  map: false,
  plugins: [
    require("postcss-import")({
      path: __dirname + '/assets/css'
    }),
    require("autoprefixer")(),
    require("cssnano")({
      preset: "default",
      zindex: false,
    }),
  ],
};
