(function () {
  'use strict';

  angular
    .module('todolist.authentication', [
      'todolist.authentication.controllers',
      'todolist.authentication.services'
    ]);

  angular
    .module('todolist.authentication.controllers', []);

  angular
    .module('todolist.authentication.services', ['ngCookies']);
})();