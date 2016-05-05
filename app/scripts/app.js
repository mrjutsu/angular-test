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
      // validateOnPageLoad: false
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
      .when('/posts', {
        templateUrl: 'views/posts.html',
        controller: 'PostsCtrl',
        controllerAs: 'posts'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .run(function($rootScope,$auth,$location){

    // $auth.validateUser();

    $rootScope.$on('auth:validation-success', function (ev, user) {
      console.log('autenticado');
      console.log(user);
      $rootScope.$broadcast('signed_in',true);
    });
    $rootScope.$on('auth:validation-error', function (ev, error) {
      console.log('errooooor');
      console.log(error);
      $rootScope.$broadcast('signed_in',false);
      $location.path('/');
    });

    $rootScope.$on('auth:session-expired', function (ev, data) {
      console.log('expirado');
      console.log(data);
      $rootScope.$broadcast('signed_in',false);
      $location.path('/');
    });

    $rootScope.$on('auth:email-confirmation-success', function (ev, data) {
      console.log('confirmado');
      console.log(data);
      $rootScope.$broadcast('signed_in',true);
    });
    $rootScope.$on('auth:email-confirmation-error', function (ev, data) {
      console.log('no confirmado');
      console.log(data);
      $rootScope.$broadcast('signed_in',false);
      $location.path('/');
    });

    $rootScope.$on('auth:password-reset-confirm-success', function (ev, data) {
      console.log('pw reseteado');
      console.log(data);
      $rootScope.$broadcast('signed_in',true);
    });
    $rootScope.$on('auth:password-reset-confirm-error', function (ev, data) {
      console.log('fallo reseteo de pw');
      console.log(data);
      $rootScope.$broadcast('signed_in',false);
      $location.path('/');
    });

    $rootScope.$on('auth:logout-success', function (ev, data) {
      console.log('sesion cerrada');
      console.log(data);
      $rootScope.$broadcast('signed_in',false);
      $location.path('/');
    });

    $rootScope.$on('auth:login-success', function (ev, data) {
      console.log('sesion iniciada');
      console.log(data);
      $rootScope.$broadcast('signed_in',true);
      $location.path('/');
    });

    $rootScope.$on('auth:registration-email-success', function (ev, data) {
      console.log('registrado con exito');
      console.log(data);
      $rootScope.$broadcast('signed_in',false);
      $location.path('/');
    });
    $rootScope.$on('auth:registration-email-error', function (ev, data) {
      console.log('error en registro');
      console.log(data);
      $rootScope.$broadcast('signed_in',false);
      $location.path('/');
    });

  });
