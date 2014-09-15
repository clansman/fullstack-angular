// Karma configuration
// http://karma-runner.github.io/0.10/config/configuration-file.html

module.exports = function(config) {
  config.set({
    // base path, that will be used to resolve files and exclude
    basePath: '',

    // testing framework to use (jasmine/mocha/qunit/...)
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
      'client/bower_components/jquery/dist/jquery.js',
      'client/bower_components/angular/angular.js',
      'client/bower_components/angular-route/angular-route.js',
      'client/bower_components/angular-sanitize/angular-sanitize.js',
      'client/bower_components/angular-animate/angular-animate.js',
      'client/bower_components/angular-dynamic-locale/src/tmhDynamicLocale.js',
      'client/bower_components/toastr/toastr.js',
      'client/bower_components/datetimepicker/jquery.datetimepicker.js',
      'client/bower_components/ngAutocomplete/src/ngAutocomplete.js',
      'client/bower_components/angular-local-storage/angular-local-storage.js',
      'client/bower_components/angular-i18n/angular-locale_ru.js',
      'client/bower_components/AngularGM/angular-gm.js',
      'client/bower_components/angular-translate/angular-translate.js',
      'client/bower_components/momentjs/moment.js',
      'client/bower_components/momentjs/locale/ru.js',
      'client/bower_components/momentjs/locale/en-gb.js',
      'client/bower_components/angularjs-geolocation/src/geolocation.js',
      'client/bower_components/bootstrap-daterangepicker/daterangepicker.js',
      'client/bower_components/d3/d3.js',
      'client/bower_components/n3-line-chart/dist/line-chart.js',
      'client/assets/lib/nanoscroller/jquery.nanoscroller.js',
      'client/assets/lib/angular-nanoscroller/scrollable.js',
      'client/assets/lib/jquery-debounce/jquery.debounce.js',
      'client/app/app.js',
      'client/app/app.coffee',
      'client/app/**/*.js',
      'client/app/**/*.coffee',
      'client/components/**/*.js',
      'client/components/**/*.coffee',
      'client/app/**/*.jade',
      'client/components/**/*.jade',
      'client/app/**/*.html',
      'client/components/**/*.html'
    ],

    preprocessors: {
      '**/*.jade': 'ng-jade2js',
      '**/*.html': 'html2js',
      '**/*.coffee': 'coffee',
    },

    ngHtml2JsPreprocessor: {
      stripPrefix: 'client/'
    },

    ngJade2JsPreprocessor: {
      stripPrefix: 'client/'
    },

    // list of files / patterns to exclude
    exclude: [],

    // web server port
    port: 8080,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false
  });
};
