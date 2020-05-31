const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.webpackConfig({
   output: {
       chunkFilename: 'js/chunks/[name].js',
   },
   node: {
      fs: "empty"
   }
});

mix.babelConfig({
 plugins: [
   // ["import", { "libraryName": "antd", "libraryDirectory": "es", "style": "css" }],
 ]
})

mix.react('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css')
    .copyDirectory('public/js', 'js')
    .copyDirectory('public/css', 'css')
    .copyDirectory('public/images', 'images');

mix.browserSync('localhost:8000');
