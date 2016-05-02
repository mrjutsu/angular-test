'use strict';

/**
 * @ngdoc function
 * @name angularTestApp.controller:RegistrationsCtrl
 * @description
 * # RegistrationsCtrl
 * Controller of the angularTestApp
 */
angular.module('angularTestApp')
  .controller('RegistrationsCtrl', function ($scope,$auth) {
    $scope.handleRegBtnClick = function() {
      $auth.submitRegistration($scope.registrationForm)
        .then(function(resp) {
          // handle success response
          console.log(resp);
        })
        .catch(function(resp) {
          console.log(resp);
          // handle error response
        });
    };
  });
