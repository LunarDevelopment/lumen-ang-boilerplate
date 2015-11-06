'use strict';

/**
 * @ngdoc service
 * @name inlineApp.Notify
 * @description
 * # Notify
 * Service in the inlineApp.
 */
angular.module('inlineApp')
  .service('Notify', function ($window) {
  // AngularJS will instantiate a singleton by calling "new" on this function
  var vm = this; 
  vm.message = '';
  vm.timing = 3000;
  vm.new = function (message) {
    $window.Materialize.toast(message, vm.timing);
    vm.message = message;
    console.log(message); 
  };
});
