'use strict';

/**
 * @ngdoc function
 * @name angularTestApp.controller:PostsCtrl
 * @description
 * # PostsCtrl
 * Controller of the angularTestApp
 */
angular.module('angularTestApp')
  .controller('PostsCtrl', [ 'apiService', '$q', '$scope', function (apiService,$q,$scope) {
    $scope.posts = apiService.allPosts()
      .then( function(posts){
        $scope.posts = posts.data;
      } );
  }]);
