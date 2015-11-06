'use strict';

/**
 * @ngdoc service
 * @name inlineApp.API
 * @description
 * # API
 * Factory in the inlineApp.
 */
angular.module('inlineApp')
  .factory('API', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
