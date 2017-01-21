(function () {
  'use strict';

  angular
    .module('todolist.layout', [
      'todolist.layout.controllers',
      'todolist.index.controllers'
    ]);

  angular
    .module('todolist.layout.controllers', []);

  angular
    .module('todolist.index.controllers', []);
})();