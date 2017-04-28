(function() {
  "use strict";

  angular.module('ngApp', ['ngRoute'])
    .config(function($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'app/gamelist.html',
          controller: 'mainController' //zmienic nazwe na wilkie litery
        })
        .when('/gamedetails/:id', {
          templateUrl: 'app/gamedetails.html',
          controller: 'gameDetailsController'
        })
    });
})();