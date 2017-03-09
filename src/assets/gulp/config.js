'use strict'

module.exports = {
  directories: {
    'dist': {
      'base': 'dist',
      'markup': 'dist',
      'fonts': 'dist/fonts',
      'icons': 'dist/images/icons',
      'images': 'dist/images',
      'scripts': 'dist/javascript',
      'styles': 'dist/stylesheets'
    }
  },
  vendor: {
    scssDirectories: [
      'src/assets/vendor/bootstrap-sass/assets/stylesheets',
      'node_modules/slick-carousel/slick',
      'src/assets/vendor/module'
    ],
    scriptFiles: [
      'src/assets/vendor/jquery/dist/jquery.js',
      'src/assets/vendor/bootstrap-sass/assets/javascripts/bootstrap.js',
      'node_modules/slick-carousel/slick/slick.min.js',
      'node_modules/response.js/response.min.js'
    ],
    fontFiles: [
      'src/assets/vendor/bootstrap-sass/assets/fonts/bootstrap/**/*',
      'node_modules/slick-carousel/slick/fonts/**/*',
      'src/assets/vendor/module/fonts/**/*'
    ]
  }
}
