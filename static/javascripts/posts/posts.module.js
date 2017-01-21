(function () {
  'use strict';

  angular
    .module('todolist.posts', [
      'todolist.posts.controllers',
      'todolist.posts.directives',
      'todolist.posts.services'
    ]);

  angular
    .module('todolist.posts.controllers', []);

  angular
    .module('todolist.posts.directives', ['ngDialog']);

  angular
    .module('todolist.posts.services', []);
})();