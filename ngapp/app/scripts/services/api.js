'use strict';

/**
 * @ngdoc service
 * @name inlineApp.API
 * @description
 * # API
 * Factory in the inlineApp.
 */
angular.module('inlineApp')
  .factory('API', function ($http) {
  // AngularJS will instantiate a singleton by calling "new" on this function
  var vm = {};
  vm.getGoals = function () {
    // Simple GET request example:
    return $http({
      method: 'GET',
      url: 'laravel/index.php/api/goal'
    });
  };
  vm.createGoal = function (form_data) {
    // Simple GET request example:
    return $http({
      method: 'POST',
      url: 'laravel/index.php/api/goal',
      data: form_data
    });
  };
  vm.getGoal = function (id) {
    // Simple GET request example:
    return $http({
      method: 'GET',
      url: 'laravel/index.php/api/goal/' + id
    });
  };
  vm.updateGoal = function (id, form_data) {
    // Simple GET request example:
    return $http({
      method: 'PUT',
      url: 'laravel/index.php/api/goal/' + id,
      data: form_data
    });
  };
  vm.deleteGoal = function (id) {
    // Simple GET request example:
    return $http({
      method: 'DELETE',
      url: 'laravel/index.php/api/goal/' + id
    });
  };
  return vm;
});
