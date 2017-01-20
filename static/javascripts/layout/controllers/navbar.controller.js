/**
* Register controller
* @namespace todolist.authentication.controllers
*/
(function () {
  'use strict';

  angular
    .module('todolist.layout.controllers')
    .controller('NavbarController', NavbarController);

  NavbarController.$inject = ['$scope', 'Authentication'];

  /**
  * @namespace RegisterController
  */
  function NavbarController($scope, Authentication) {
    var vm = this;

    vm.logout = logout;

    /**
    * @name logout
    * @desc Logout user
    * @memberOf thinkster.authentication.controllers.NavbarController
    */
    function logout() {
      Authentication.logout();
    }


  }

})();