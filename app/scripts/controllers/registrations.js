'use strict';

/**
 * @ngdoc function
 * @name angularTestApp.controller:RegistrationsCtrl
 * @description
 * # RegistrationsCtrl
 * Controller of the angularTestApp
 */
angular.module('angularTestApp')
  .controller('RegistrationsCtrl', function ($scope,$auth,$location) {
    $scope.handleRegBtnClick = function() {
      $auth.submitRegistration($scope.registrationForm)
        .then(function() {
          $location.path('/');
        })
        .catch(function() {
        });
    };
  });
