'use strict';

/**
 * @ngdoc overview
 * @name inlineApp
 * @description
 * # inlineApp
 *
 * Main module of the application.
 */
angular
  .module('inlineApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'angularMoment',
    'ui.materialize',
    'satellizer',
    'formly'
  ])
  .config(function ($routeProvider, formlyConfigProvider) {
    formlyConfigProvider.setType([{
      name: 'input',
      templateUrl: 'views/material-input.html'
    }, {
      name: 'select',
      templateUrl: 'views/material-select.html'
    }]);
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });