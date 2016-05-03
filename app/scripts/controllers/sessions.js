'use strict';

/**
 * @ngdoc function
 * @name angularTestApp.controller:SessionsCtrl
 * @description
 * # SessionsCtrl
 * Controller of the angularTestApp
 */
angular.module('angularTestApp')
  .controller('SessionsCtrl', function ($scope,$auth) {
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


    $scope.handleSignOutBtnClick = function() {
      $auth.signOut()
        .then(function(resp) {
          console.log(resp);
          // handle success response
        })
        .catch(function(resp) {
          console.log(resp);
          // handle error response
        });
    };

    $scope.signOut = function() {
      $auth.signOut()
        .then(function(resp) {
          // handle success response
        })
        .catch(function(resp) {
          // handle error response
        });
    };
  });
