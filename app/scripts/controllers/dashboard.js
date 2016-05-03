'use strict';

/**
 * @ngdoc function
 * @name angularTestApp.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of the angularTestApp
 */
angular.module('angularTestApp')
  .controller('DashboardCtrl', function ($auth,$scope) {

    $scope.SignedIn = false;

    $scope.$on('signed_in',function(ev,data){
      $scope.SignedIn = data;
    });

  });
