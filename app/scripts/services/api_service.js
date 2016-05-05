'use strict';

/**
 * @ngdoc service
 * @name angularTestApp.apiService
 * @description
 * # apiService
 * Service in the angularTestApp.
 */
angular.module('angularTestApp')
  .service('apiService', [ '$http', '$q', function ($http,$q) {

    var deferred = $q.defer();

    var apiUrl = 'http://localhost:3000';

    this.allPosts = function(){
      $http.get( apiUrl + '/posts' )
        .then( function(data){
          deferred.resolve(data);
        } );

      return deferred.promise;
    };

    // AngularJS will instantiate a singleton by calling "new" on this function
  }]);
