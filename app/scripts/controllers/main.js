'use strict';

/**
 * @ngdoc function
 * @name angularTestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularTestApp
 */
angular.module('angularTestApp')
  .controller('MainCtrl', function ($scope,$auth) {
    $scope.handleRegBtnClick = function() {
      $auth.submitRegistration($scope.registrationForm)
        .then(function(resp) {
          // handle success response
          console.log("eeexitooooo");
          console.log(resp);
        })
        .catch(function(resp) {
          console.log("paila");
          console.log(resp);
          // handle error response
        });
    };

    $scope.handleLoginBtnClick = function() {
      $auth.submitLogin($scope.loginForm)
        .then(function(resp) {
          console.log(resp);
          // handle success response
        })
        .catch(function(resp) {
          console.log(resp);
          // handle error response
        });
    };

    console.log( $auth.validateUser() );

  });
