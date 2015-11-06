'use strict';

/**
 * @ngdoc function
 * @name inlineApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the inlineApp
 */
angular.module('inlineApp')
  .controller('MainCtrl', function (API, Notify) {
    var vm = this;
    vm.goals = [];
    vm.goal = {};
    vm.getGoals = function () {
      API.getGoals()
        .success(function (data) {
          vm.goals = data;
        })
        .error(function (error) {
          Notify.new(error);
        });
    };
    vm.createGoal = function (form_data) {
      API.createGoal(form_data)
        .success(function (data) {
          Notify.new('Created!');
          vm.getGoals();
        })
        .error(function (error) {
          Notify.new(error);
        });
    };
    vm.deleteGoal = function (id) {
      API.deleteGoal(id)
        .success(function (data) {          
          Notify.new('Deleted!');
          vm.getGoals();
        })
        .error(function (error) {
          Notify.new(error);
        });
    };
    vm.authorMatch = function( criteria ) {
      return function( goal ) {
        return goal.author === criteria;
      };
    };
    vm.goalFields = [
      {
        key: 'title',
        type: 'input',
        templateOptions: {
          label: 'Title',
          placeholder: 'Whats the goal?'
        }
      },
      {
        key: 'author',
        type: 'select',
        templateOptions: {
          label: 'Who',
          placeholder: 'Which of us needs to do the super sick trick?'
        }
      },
      {
        key: 'status',
        type: 'input',
        templateOptions: {
          label: 'Status',
          placeholder: 'How close is it?'
        }
      }
    ];
    vm.getGoals();
  });