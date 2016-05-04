'use strict';

/**
 * @ngdoc function
 * @name angularTestApp.controller:SessionsCtrl
 * @description
 * # SessionsCtrl
 * Controller of the angularTestApp
 */
angular.module('angularTestApp')
  .controller('SessionsCtrl', function ($scope,$auth,$rootScope) {
    $scope.handleLoginBtnClick = function() {
      $auth.submitLogin($scope.loginForm)
        .then(function() {
          $rootScope.$broadcast('signed_in',true);
        })
        .catch(function() {
        });
    };

    $scope.signOut = function() {
      $auth.signOut()
        .then(function() {
          $rootScope.$broadcast('signed_in',false);
        })
        .catch(function() {
        });
    };
  });
