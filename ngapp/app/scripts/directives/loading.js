'use strict';

/**
 * @ngdoc directive
 * @name inlineApp.directive:loading
 * @description
 * # loading
 */
angular.module('inlineApp')
  .directive('loading', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the loading directive');
      }
    };
  });
