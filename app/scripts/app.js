'use strict';

/**
 * @ngdoc overview
 * @name angularTestApp
 * @description
 * # angularTestApp
 *
 * Main module of the application.
 */
angular
  .module('angularTestApp', [
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ng-token-auth'
  ])
  .config(function ($routeProvider,$authProvider) {
    $authProvider.configure({
      apiUrl: 'http://localhost:3000'
    });
    $routeProvider
      .when('/', {
        templateUrl: 'views/dashboard.html',
        controller: 'DashboardCtrl',
        controllerAs: 'dashboard'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/sign_up', {
        templateUrl: 'views/sign_up.html',
        controller: 'RegistrationsCtrl',
        controllerAs: 'signUp'
      })
      .when('/sign_in', {
        templateUrl: 'views/sign_in.html',
        controller: 'SessionsCtrl',
        controllerAs: 'signIn'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
