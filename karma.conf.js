module.exports = function(config){
  config.set({

    basePath : './',

    files : [
      'app/bower_components/moment/moment.js',
      'app/bower_components/angular/angular.js',
      'app/bower_components/angular-route/angular-route.js',
      'app/bower_components/angular-resource/angular-resource.js',
      'app/bower_components/angular-mocks/angular-mocks.js',
      'app/bower_components/angular-ui-grid/ui-grid.js',
      'app/bower_components/angular-bootstrap/ui-bootstrap.js',
      'app/bower_components/angular-moment/angular-moment.js',
      'app/bower_components/angular-ui-map/ui-map.js',
      'app/bower_components/angular-ui-utils/event.js',
      'app/*.js',
      'app/js/**/*.js',
      'app/js/lodash.js',
      'test/unit/**/*.js',
      'app/components/**/*.js',
      'app/view*/**/*.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
