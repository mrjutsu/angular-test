'use strict';

/**
 * @ngdoc directive
 * @name angularTestApp.directive:navbar
 * @description
 * # navbar
 */
angular.module('angularTestApp')
  .directive('navbar', function () {
    return {
      templateUrl: 'views/_navbar.html',
      restrict: 'E'
    };
  });
