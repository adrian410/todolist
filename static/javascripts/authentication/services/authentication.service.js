/**
* Authentication
* @namespace todolist.authentication.services
*/
(function () {
  'use strict';

  angular
    .module('todolist.authentication.services')
    .factory('Authentication', Authentication);

  Authentication.$inject = ['$cookies', '$http'];

  /**
  * @namespace Authentication
  * @returns {Factory}
  */
  function Authentication($cookies, $http) {
    /**
    * @name Authentication
    * @desc The Factory to be returned
    */
    var Authentication = {
      getAuthenticatedAccount: getAuthenticatedAccount,
      isAuthenticated: isAuthenticated,
      login: login,
      register: register,
      setAuthenticatedAccount: setAuthenticatedAccount,
      unauthenticate: unauthenticate,
      logout : logout
    };

    return Authentication;

    ////////////////////

    /**
     * @name getAuthenticatedAccount
     * @desc Return the currently authenticated account
     * @returns {object|undefined} Account if authenticated, else `undefined`
     * @memberOf thinkster.authentication.services.Authentication
     */
    function getAuthenticatedAccount() {
      if (!$cookies.authenticatedAccount) {
        return;
      }

      return JSON.parse($cookies.authenticatedAccount);
    }

    /**
     * @name isAuthenticated
     * @desc Check if the current user is authenticated
     * @returns {boolean} True is user is authenticated, else false.
     * @memberOf thinkster.authentication.services.Authentication
     */
    function isAuthenticated() {
      return !!$cookies.authenticatedAccount;
    }

    /**
    * @name login
    * @desc Try to login with 'email' and password 'password'
    * @param {string} email The email entered by the user
    * @param {string} password The password entered by the user
    * @returns {Promise}
    * @memberOf todolist.authentication.services.Authentication
    */
    function login(email,password){
        return $http.post('/api/v1/login/',{
            email : email,
            password : password
        }).then(loginSuccessFn,loginErrorFn);
    }

    /**
    * @name loginSuccessFn
    * @desc Set the authenticated account and redirect to index
    */
    function loginSuccessFn(data, status, headers, config){
        Authentication.setAuthenticatedAccount(data.data);

        window.location = '/';
    }

    function loginErrorFn(data,status,headers,config){
        console.error('Epic Failure');
    }

    /**
    * @name register
    * @desc Try to register a new user
    * @param {string} username The username entered by the user
    * @param {string} password The password entered by the user
    * @param {string} email The email entered by the user
    * @returns {Promise}
    * @memberOf todolist.authentication.services.Authentication
    */
    function register(email, password, username) {
      return $http.post('/api/v1/accounts/', {
        username: username,
        password: password,
        email: email
      }).then(registerSuccessFn,registerErrorFn);
    }

    /**
      * @name registerSuccessFn
      * @desc Log the new user in
    */
    function registerSuccessFn(data,status,headers,config){
        console.log("register success");
        console.log(data.data);
        console.log("register success");
        //Authentication.login(email,password);
    }

    /**
      * @name registerErrorFn
      * @desc Log "Epic failure!" to the console
    */
    function registerErrorFn(data,status,headers,config){
        console.error("Epic failure !");
    }

    /**
     * @name unauthenticate
     * @desc Delete the cookie where the user object is stored
     * @returns {undefined}
     * @memberOf thinkster.authentication.services.Authentication
     */
    function unauthenticate() {
      delete $cookies.authenticatedAccount;
    }

    /**
     * @name setAuthenticatedAccount
     * @desc Stringify the account object and store it in a cookie
     * @param {Object} user The account object to be stored
     * @returns {undefined}
     * @memberOf thinkster.authentication.services.Authentication
     */
    function setAuthenticatedAccount(account) {
      $cookies.authenticatedAccount = JSON.stringify(account);
    }

   /**
   * @name loginErrorFn
   * @desc Log "Epic failure!" to the console
   */
   function loginErrorFn(data, status, headers, config) {
    console.error('Epic failure!');
   }


   /**
    * @name logout
    * @desc Try to logout
    * @returns {Promise}
    * @memberOf todolist.authentication.services.Authentication
    */
   function logout(){
      return $http.post('/api/v1/auth/logout/')
        .then(logoutSuccessFn,logoutErrorFn);
   }


   /**
   * @name logoutSuccessFn
   * @desc Log "Epic failure!" to the console
   */
   function logoutSuccessFn(data, status, headers, config) {
      Authentication.unauthenticate();
      window.location = '/';
   }

   /**
   * @name logoutErrorFn
   * @desc Log "Epic failure!" to the console
   */
   function logoutErrorFn(data, status, headers, config) {
    console.error('Epic failure!');
   }




  }
})();