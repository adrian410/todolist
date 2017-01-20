(function () {
  'use strict';

  angular
    .module('todolist.routes')
    .config(config);

  config.$inject = ['$routeProvider'];

  /**
  * @name config
  * @desc Define valid application routes
  */
  function config($routeProvider) {

    $routeProvider.when('/register', {
      controller: 'RegisterController',
      controllerAs: 'vm',
      templateUrl: '/static/templates/authentication/register.html'
    }).when('/login',{
      controller: 'LoginController',
      controllerAs: 'vm',
      templateUrl: '/static/templates/authentication/login.html'
    }).when('/logout',{
      controller: 'NavbarController',
      controllerAs: 'vm',
      templateUrl: '/static/templates/authentication/logout.html'
    })
    .when('/', {
      controller: 'IndexController',
      controllerAs: 'vm',
      templateUrl: '/static/templates/layout/index.html'
    })
    .otherwise('/');
  }
})();