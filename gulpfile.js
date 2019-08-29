global.$ = {
  gulp: require('gulp'),
  gp:   require('gulp-load-plugins')(),
  browserSync: require('browser-sync').create(),
  rollup: require('rollup'),
  imageminJpegRecompress: require('imagemin-jpeg-recompress'),
  pngquant: require('imagemin-pngquant'),
  del: require('del'),
  path: {
    config: require('./gulp/config.js'),
    jquery: './js/jquery.js',
    js: './js/**/*.js',
    carousel: './node_modules/owl.carousel/dist/owl.carousel.min.js',
    carouselCssDefault: './node_modules/owl.carousel/dist/assets/owl.theme.default.css',
    carouselCss: './node_modules/owl.carousel/dist/assets/owl.carousel.css'
  }
};

$.path.config.forEach(function(path) {
  require(path)();
});