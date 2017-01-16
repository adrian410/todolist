(function () {
  'use strict';

  angular
    .module('todolist', [
      'todolist.config',
      'todolist.routes',
      'todolist.authentication'
    ]);

  angular
    .module('todolist.config', []);
  angular
    .module('todolist.routes', ['ngRoute']);
})();

angular
  .module('todolist')
  .run(run);

run.$inject = ['$http'];

/**
* @name run
* @desc Update xsrf $http headers to align with Django's defaults
*/
function run($http) {
  $http.defaults.xsrfHeaderName = 'X-CSRFToken';
  $http.defaults.xsrfCookieName = 'csrftoken';
}