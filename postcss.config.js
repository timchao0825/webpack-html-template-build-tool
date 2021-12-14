module.exports = {
  plugins: [
    require('autoprefixer')({
      grid: true,
      overrideBrowserslist: ['> 1%', 'last 5 versions', 'Firefox >= 45', 'ios >= 8', 'android >= 4.4', 'ie >= 10'],
    }),
  ],
};
