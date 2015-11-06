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
      name: 'title',
      templateUrl: 'views/material-input.html'
    }, {
      name: 'author',
      templateUrl: 'views/material-select.html'
    }, {
      name: 'status',
      templateUrl: 'views/material-status.html'
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